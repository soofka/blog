const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const rimraf = require('rimraf');

const LANGUAGES = {
  EN: 'en',
  // PL: 'pl',
};

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

const generateEntries = () => {
  createDestinationDirectory();

  const xmlParser = new xml2js.Parser({
    trim: true,
    explicitRoot: false,
    explicitArray: false,
  });

  Object.values(LANGUAGES).forEach((language) => {
    createDestinationDirectory(language);

    const entries = [];
    const entryFileNames = getEntryFileNames(language);

    entryFileNames.forEach((entryFileName) => {
      const entryRaw = loadEntryFile(entryFileName, language);
      const entryXml = parseEntryRawToXml(entryRaw);

      xmlParser.parseString(entryXml, (error, data) => {
        entries.push(parseEntryMetaToJson(data, entryFileName));
        saveEntryContentFile(entryFileName, parseEntryContentToHtml(data), language);
      });
    });

    saveEntriesFile(entries, language);
  });
};

const createDestinationDirectory = (language) => {
  let directoryPath = ENTRIES_DESTINATION_PATH;

  if (language) {
    directoryPath = path.join(directoryPath, language);
  }

  if (fs.existsSync(directoryPath)) {
    rimraf.sync(directoryPath);
  }

  fs.mkdirSync(directoryPath);
};

const getEntryFileNames = (language) => fs.readdirSync(path.join(ENTRIES_SOURCE_PATH, language));

const loadEntryFile = (entryFileName, language) => fs.readFileSync(path.join(ENTRIES_SOURCE_PATH, language, entryFileName)).toString();

const parseEntryRawToXml = (entryRaw) => replaceInStringBasedOnMap(entryRaw, ENTRY_TO_XML_MAP);

const parseEntryMetaToJson = (data, fileName) => ({
  id: data.$.id,
  title: data.title,
  tags: data.$.tags.split(',').map((tag) => tag.trim()),
  brief: {
    text: data.brief,
    imageFileName: data.banner.$.src,
  },
  created: data.$.created,
  updated: data.$.updated,
  contentFileName: fileName,
  public: data.$.public,
});

const parseEntryContentToHtml = (data) => replaceInStringBasedOnMap(data.content, ENTRY_CONTENT_TO_HTML_MAP);

const replaceInStringBasedOnMap = (originalString, map) => {
  let resultString = originalString;

  for (let pair of map) {
    resultString = resultString.split(pair[0]).join(pair[1]);
  }

  return resultString;
};

const saveEntryContentFile = (entryFileName, entryContent, language) => {
  fs.writeFileSync(path.join(ENTRIES_DESTINATION_PATH, language, entryFileName), entryContent);
};

const saveEntriesFile = (entries, language) => {
  fs.writeFileSync(path.join(ENTRIES_DESTINATION_PATH, `entries.${language}.json`), JSON.stringify(entries));
};

generateEntries();
