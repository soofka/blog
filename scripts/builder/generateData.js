const fs = require('fs');
const path = require('path');
const Feed = require('feed').Feed;
const xml2js = require('xml2js');
const rimraf = require('rimraf');
const appconfig = require('./app.config.default');

const LANGUAGES = {
  EN: 'en',
  // PL: 'pl',
};
const MAIN_LANGUAGE = LANGUAGES.EN;

const ENTRY_TO_XML_MAP = new Map([
  ['<brief>', '<brief><![CDATA['],
  ['</brief>', ']]></brief>'],
  ['<content>', '<content><![CDATA['],
  ['</content>', ']]></content>'],
]);

const ENTRY_CONTENT_TO_HTML_MAP = new Map([
  ['<youtube-video>', '<div class="video-container"><div class="video-container--wrapper">'],
  ['</youtube-video>', '</div></div>'],
  ['<codeblock>', '<pre><code>'],
  ['</codeblock>', '</code></pre>'],
]);

const ENTRIES_SOURCE_PATH = 'content/entries';
const ENTRIES_DESTINATION_PATH = 'content/generated/entries';
const ARCHIVE_DESTINATION_PATH = 'content/generated/archive';
const TAGS_DESTINATION_PATH = 'content/generated/tags';

const FEED_DESTINATION_PATH = 'assets';
const MANIFEST_DESTINATION_PATH = 'assets';

const generateData = () => {
  generateManifestFile();
  createDestinationDirectories();

  const xmlParser = getXmlParser();
  const xmlBuilder = getXmlBuilder();

  Object.values(LANGUAGES).forEach((language) => {
    createDestinationDirectories(language);

    const data = {
      entries: [],
      archive: [],
      tags: [],
      feed: '',
    };

    const feedGenerator = getFeedGenerator(language);

    getEntryFileNames(language).forEach((entryFileName) => {
      const entryRaw = loadEntryFile(entryFileName, language);
      const entryXml = parseEntryRawToXml(entryRaw);

      xmlParser.parseString(entryXml, (error, entryObject) => {
        const entryMeta = parseEntryObjectToEntryMeta(entryObject, entryFileName);

        if (entryMeta.public) {
          data.entries.push(entryMeta);
          data.archive.push(getArchiveEntryFromEntryMeta(entryMeta));
          data.tags = combineTagArrays(data.tags, entryMeta.tags);

          addEntryToFeed(entryMeta, feedGenerator);
          saveEntryContentFile(entryFileName, parseEntryContentToHtml(entryObject.content), language);
        }
      });
    });

    xmlParser.parseString(feedGenerator.rss2(), (error, feedObject) => {
      data.feed = xmlBuilder.buildObject({...feedObject, language});
      saveDataFiles(data, language);
    });
  });
};

const generateManifestFile = () => {
  saveManifestFile({
    name: appconfig.title,
    short_name: appconfig.title,
    start_url: "/",
    display: "standalone",
    background_color: appconfig.themeColor,
    theme_color: appconfig.themeColor,
    description: appconfig.description,
    icons: appconfig.icons.map((icon) => ({
      sizes: `${icon.width}x${icon.height}`,
      type: `image/${icon.url.substr(icon.url.lastIndexOf('.') + 1)}`,
      src: icon.url,
    })),
  });
};

const createDestinationDirectories = (language) => {
  createDestinationDirectory(ENTRIES_DESTINATION_PATH, language);
  createDestinationDirectory(ARCHIVE_DESTINATION_PATH);
  createDestinationDirectory(TAGS_DESTINATION_PATH);
};

const createDestinationDirectory = (directoryPath, language) => {
  if (language) {
    directoryPath = path.join(directoryPath, language);
  }

  if (fs.existsSync(directoryPath)) {
    rimraf.sync(directoryPath);
  }

  fs.mkdirSync(directoryPath);
};

const getXmlParser = () => new xml2js.Parser({
  trim: true,
  explicitRoot: false,
  explicitArray: false,
});

const getXmlBuilder = () => new xml2js.Builder({
  trim: true,
  rootName: 'rss',
});

const getFeedGenerator = (language) => {
  const feedGenerator = new Feed({
    title: appconfig.title,
    description: appconfig.description,
    id: appconfig.url,
    link: appconfig.url,
    image: `${appconfig.url}${appconfig.image}`,
    copyright: appconfig.license,
    feedLinks: {
      rss: `${appconfig.url}/rss`,
    },
    author: appconfig.author,
    language: language,
  });

  appconfig.categories.forEach((category) => {
    feedGenerator.addCategory(category);
  });
  feedGenerator.addContributor(appconfig.author);

  return feedGenerator;
};

const getEntryFileNames = (language) => fs.readdirSync(path.join(ENTRIES_SOURCE_PATH, language));

const loadEntryFile = (entryFileName, language) => fs.readFileSync(path.join(ENTRIES_SOURCE_PATH, language, entryFileName)).toString();

const parseEntryRawToXml = (entryRaw) => replaceInStringBasedOnMap(entryRaw, ENTRY_TO_XML_MAP);

const parseEntryObjectToEntryMeta = (entryObject, fileName) => {
  const id = generateEntryId(entryObject.$.created);
  return {
    id,
    url: `/${id}`,
    title: entryObject.title,
    tags: entryObject.$.tags.split(',').map((tag) => parseTagToTagObject(tag.trim())),
    brief: {
      text: entryObject.brief,
      imageFileName: entryObject.banner.$.src,
    },
    created: entryObject.$.created,
    updated: entryObject.$.updated,
    contentFileName: fileName,
    public: entryObject.$.public,
  }
};

const generateEntryId = (dateCreated) => dateCreated.replace('-', '');

const parseTagToTagObject = (tag) => {
  const id = generateTagId(tag);
  return {
    id,
    url: `/${id}`,
    name: tag,
  };
};

const generateTagId = (tag) => {
  let sum = 0;
  const length = tag.length;

  for (let i = 0; i < length; i++) {
    sum += tag.charCodeAt(i);
  }

  let encodedNumber = sum * ((tag.charCodeAt(0) + tag.charCodeAt(length - 1)) / length);
  const maxInt = 65535;

  while(encodedNumber > maxInt) {
    encodedNumber /= length;
  }

  return Math.round(encodedNumber)
    .toString(16)
    .padStart(4, '0');
};

const parseEntryContentToHtml = (content) => replaceInStringBasedOnMap(content, ENTRY_CONTENT_TO_HTML_MAP);

const getArchiveEntryFromEntryMeta = (entryMeta) => ({
  id: entryMeta.id,
  title: entryMeta.title,
  created: entryMeta.created,
});

// i leave it here because it's cool
// const getUniqueTags = (allTags, tagsToBeFiltered) => tagsToBeFiltered.filter((tag1) => !allTags.some((tag2) => tag1.id === tag2.id));

const combineTagArrays = (allTags, tagsToBeAdded) => {
  let newAllTags = [...allTags];
  const uniqueTagsToBeAdded = tagsToBeAdded.filter((tag1, index) => tagsToBeAdded.findIndex((tag2) => tag1.id === tag2.id) === index);

  uniqueTagsToBeAdded.forEach((tagToBeAdded) => {
    const existingTagIndex = newAllTags.findIndex((existingTag) => existingTag.id === tagToBeAdded.id);

    if (existingTagIndex === -1) {
      newAllTags.push({...tagToBeAdded, count: 1});
    } else {
      if (newAllTags[existingTagIndex].count) {
        newAllTags[existingTagIndex].count++;
      } else {
        newAllTags[existingTagIndex].count = 1;
      }
    }
  });

  return newAllTags;
};

const addEntryToFeed = (entryMeta, feedGenerator) => {
  feedGenerator.addItem({
    id: entryMeta.id,
    title: entryMeta.title,
    link: `${appconfig.url}${entryMeta.url}`,
    description: entryMeta.brief.text,
    author: [appconfig.author],
    date: new Date(entryMeta.created),
    image: `${appconfig.url}/images/${entryMeta.url}`,
  });
};

const saveEntryContentFile = (entryFileName, entryContent, language) => {
  saveFile(path.join(ENTRIES_DESTINATION_PATH, language, entryFileName), entryContent);
};

const saveDataFiles = (data, language) => {
  saveEntriesFile(data.entries, language);
  saveArchiveFile(data.archive, language);
  saveFeedFile(data.feed, language);
  saveTagsFile(data.tags);
};

const saveEntriesFile = (entries, language) => {
  saveDataFile(ENTRIES_DESTINATION_PATH, 'entries', entries, language);
};

const saveArchiveFile = (archive, language) => {
  saveDataFile(ARCHIVE_DESTINATION_PATH, 'archive', archive, language);
};

const saveTagsFile = (tags) => {
  saveDataFile(TAGS_DESTINATION_PATH, 'tags', tags);
};

const saveFeedFile = (feed, language) => {
  const fileType = 'xml';
  const contentType = 'rss';

  saveDataFile(FEED_DESTINATION_PATH, contentType, feed, language, fileType);

  if (language === MAIN_LANGUAGE) {
    saveDataFile(FEED_DESTINATION_PATH, contentType, feed, undefined, fileType);
  }
};

const saveManifestFile = (manifest) => {
  saveDataFile(MANIFEST_DESTINATION_PATH, 'manifest', manifest);
};

const saveDataFile = (destinationDirectoryPath, contentType, data, language, fileType = 'json') => {
  const fileName = `${language ? `${contentType}.${language}` : contentType}.${fileType}`;
  saveFile(path.join(destinationDirectoryPath, fileName), fileType === 'json' ? JSON.stringify(data) : data);
};

const saveFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

const replaceInStringBasedOnMap = (originalString, map) => {
  let resultString = originalString;

  for (let pair of map) {
    resultString = resultString.split(pair[0]).join(pair[1]);
  }

  return resultString;
};

generateData();
