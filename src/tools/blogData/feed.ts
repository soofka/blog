import { BLOG_CONFIG, DEFAULT_LANGUAGE, FEED_DESTINATION_PATH, IMAGES_DIRECTORY_NAME } from 'common/constants';
import { Language } from 'common/types';
import { Feed } from 'feed';
import { EntriesInterface, EntryInterface } from './entries';
import { forceCreateDirectory, getXmlBuilder, getXmlParser, saveDataFile } from './helpers';

export const createFeedFiles = (entries: EntriesInterface): void => {
  createFeedDestinationDirectory();

  const xmlParser = getXmlParser();
  const xmlBuilder = getXmlBuilder();

  Object.keys(entries).forEach((language: Language) => {
    const feedGenerator = getFeedGenerator(language);

    entries[language].forEach((entry: EntryInterface) => {
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

const getFeedGenerator = (language: Language): Feed => {
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

const createFeedDestinationDirectory = (): void =>
  forceCreateDirectory(FEED_DESTINATION_PATH);

const saveFeedFile = (feed: string, language: Language) => {
  const contentFileType = 'rss';
  const contentFileExtension = 'xml';

  saveDataFile(FEED_DESTINATION_PATH, feed, language, contentFileType, contentFileExtension);

  if (language === DEFAULT_LANGUAGE) {
    saveDataFile(FEED_DESTINATION_PATH, feed, undefined, contentFileType, contentFileExtension);
  }
};
