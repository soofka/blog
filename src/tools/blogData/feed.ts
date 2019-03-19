import {forceCreateDirectory, getXmlBuilder, getXmlParser, saveDataFile} from "./helpers";
import {blogConfig, DEFAULT_LANGUAGE, FEED_DESTINATION_PATH, IMAGES_DIRECTORY_NAME} from "../../common/constants";
import { Feed } from 'feed';

export const createFeedFiles = (entries) => {
  createFeedDestinationDirectory();

  const xmlParser = getXmlParser();
  const xmlBuilder = getXmlBuilder();

  Object.keys(entries).forEach((language) => {
    const feedGenerator = getFeedGenerator(language);

    entries[language].forEach((entry) => {
      feedGenerator.addItem({
        id: entry.id,
        title: entry.title,
        link: `${blogConfig.url}${entry.url}`,
        description: entry.brief,
        author: [blogConfig.author],
        date: new Date(entry.created),
        image: `${blogConfig}/${IMAGES_DIRECTORY_NAME}/${entry.url}`,
      });
    });

    xmlParser.parseString(
      feedGenerator.rss2(),
      (error, feedObject) => {
        const feed = xmlBuilder.buildObject({
          ...feedObject,
          language,
        });
        saveFeedFile(feed, language);
      }
    );
  });
};

const getFeedGenerator = (language) => {
  const feedGenerator = new Feed({
    title: blogConfig.title,
    description: blogConfig.description,
    id: blogConfig.url,
    link: blogConfig.url,
    image: blogConfig.imageUrl,
    copyright: blogConfig.license,
    feed: 'rss',
    feedLinks: {
      rss: blogConfig.feedUrls[language]
    },
    author: blogConfig.author
  });

  blogConfig.categories.forEach((category) => {
    feedGenerator.addCategory(category);
  });
  feedGenerator.addContributor(blogConfig.author);

  return feedGenerator;
};

const createFeedDestinationDirectory = () =>
  forceCreateDirectory(FEED_DESTINATION_PATH);

const saveFeedFile = (feed, language) => {
  const contentFileType = 'rss';
  const contentFileExtension = 'xml';

  saveDataFile(FEED_DESTINATION_PATH, feed, contentFileType, language, contentFileExtension);

  if (language === DEFAULT_LANGUAGE) {
    saveDataFile(FEED_DESTINATION_PATH, feed, contentFileType, undefined, contentFileExtension);
  }
};
