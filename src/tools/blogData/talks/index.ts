import {
  TALKS_SOURCE_PATH,
  TALKS_DESTINATION_PATH,
  IMAGES_DIRECTORY_NAME,
  SLIDES_DIRECTORY_NAME,
  LANGUAGES,
} from '../../../common/constants';
import {
  parseTextToNiceUrl,
  isLanguageValid,
} from '../../../common/helpers';
import {
  createContentFiles,
  generateContentFileName,
  generateIdBasedOnDateString,
  parseTagToTagObject,
} from '../helpers';

export const createTalksFiles = (environment) =>
  createContentFiles(
    TALKS_SOURCE_PATH,
    TALKS_DESTINATION_PATH,
    'talks',
    environment,
    formatTalkData,
  );

const formatTalkData = (talkDataRaw) => {
  const id = generateIdBasedOnDateString(talkDataRaw.$.created);
  const talkData = {
    meta: {
      id,
      url: `/${id}`,
      public: !!talkDataRaw.$.public,
      created: talkDataRaw.$.created,
      imageUrl: `/${IMAGES_DIRECTORY_NAME}/${talkDataRaw.$.image}`,
      videoUrl: talkDataRaw.$.videoUrl,
      slidesUrl: `/${SLIDES_DIRECTORY_NAME}/${talkDataRaw.$.slides}`,
    },
    versions: {},
  };

  talkDataRaw.version.forEach((talkVersionRaw) => {
    const language = talkVersionRaw.$.language;

    if (isLanguageValid(language)) {
      talkData.versions[language] = {
        title: talkVersionRaw.title,
        tags: talkVersionRaw.tags.$.list.split(',').map((tag: string) => parseTagToTagObject(tag.trim())),
        conference: talkVersionRaw.conference,
        brief: talkVersionRaw.brief,
      };

      if (talkVersionRaw.content) {
        talkData.versions[language].content = talkVersionRaw.content;
        talkData.versions[language].contentFileName = generateContentFileName(talkVersionRaw.title);
        talkData.versions[language].niceUrl = parseTextToNiceUrl(talkVersionRaw.title);
      }
    }
  });

  return talkData;
};
