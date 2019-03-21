import { BLOG_CONFIG, DEFAULT_LANGUAGE, FEED_DESTINATION_PATH, IMAGES_DIRECTORY_NAME } from 'common/constants';
import { Feed } from 'feed';
import { forceCreateDirectory, getXmlBuilder, getXmlParser, saveDataFile } from './helpers';

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
        link: `${BLOG_CONFIG.url}${entry.url}`,
        description: entry.brief,
        author: [BLOG_CONFIG.author],
        date: new Date(entry.created),
        image: `${BLOG_CONFIG}/${IMAGES_DIRECTORY_NAME}/${entry.url}`,
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
      },
    );
  });
};

const getFeedGenerator = (language) => {
  const feedGenerator = new Feed({
    title: BLOG_CONFIG.title,
    description: BLOG_CONFIG.description,
    id: BLOG_CONFIG.url,
    link: BLOG_CONFIG.url,
    image: BLOG_CONFIG.imageUrl,
    copyright: BLOG_CONFIG.license,
    feed: 'rss',
    feedLinks: {
      rss: BLOG_CONFIG.feedUrls[language],
    },
    author: BLOG_CONFIG.author,
  });

  BLOG_CONFIG.categories.forEach((category) => {
    feedGenerator.addCategory(category);
  });
  feedGenerator.addContributor(BLOG_CONFIG.author);

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
