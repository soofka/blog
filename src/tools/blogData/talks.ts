import {
  IMAGES_DIRECTORY_NAME,
  SLIDES_DIRECTORY_NAME,
  TALKS_DESTINATION_PATH,
  TALKS_SOURCE_PATH,
} from 'common/constants';
import {
  generateIdBasedOnDateString,
  isLanguageValid,
  parseTextToNiceUrl,
} from 'common/helpers';
import { Environment, Language, TagInterface, TalkConferenceInterface, TalksInterface } from 'common/types';
import {
  createContentFiles,
  generateContentFileName,
  parseTagToTagObject,
} from 'tools/blogData/helpers';

interface TalkVersionsRawInterface {
  $: {
    public: boolean;
    created: string;
    image: string;
    slides: string;
    videoUrl?: string;
  };
  version: {
    $: {
      language: Language;
    };
    title: string;
    tags: {
      $: {
        list: string;
      };
    };
    conference?: {
      $: {
        name: string;
        location: string;
      };
    };
    brief: string;
    content?: string;
  }[];
}

interface TalkVersionsInterface {
  meta: TalkMetaInterface;
  versions: {
    [s: string]: TalkVersionInterface;
  };
}

export interface TalkMetaInterface {
  id: string;
  url: string;
  public: boolean;
  created: string;
  imageUrl: string;
  slidesUrl: string;
  videoUrl?: string;
}

export interface TalkVersionInterface {
  title: string;
  tags: TagInterface[];
  conference?: TalkConferenceInterface;
  brief: string;
  content?: string;
  contentFileName?: string;
  niceUrl?: string;
}

export const createTalksFiles = (environment: Environment): TalksInterface =>
  createContentFiles(
    TALKS_SOURCE_PATH,
    TALKS_DESTINATION_PATH,
    'talks',
    environment,
    formatTalkData,
  );

const formatTalkData = (talkDataRaw: TalkVersionsRawInterface): TalkVersionsInterface => {
  const id = generateIdBasedOnDateString(talkDataRaw.$.created);
  const talkData: TalkVersionsInterface = {
    meta: {
      id,
      url: `/${id}`,
      public: talkDataRaw.$.public,
      created: talkDataRaw.$.created,
      imageUrl: `/${IMAGES_DIRECTORY_NAME}/${talkDataRaw.$.image}`,
      slidesUrl: `/${SLIDES_DIRECTORY_NAME}/${talkDataRaw.$.slides}`,
    },
    versions: {},
  };

  if (talkDataRaw.$.videoUrl) {
    talkData.meta.videoUrl = talkDataRaw.$.videoUrl;
  }

  talkDataRaw.version.forEach((talkVersionRaw) => {
    const language = talkVersionRaw.$.language;

    if (isLanguageValid(language)) {
      talkData.versions[language] = {
        title: talkVersionRaw.title,
        tags: talkVersionRaw.tags.$.list.split(',').map((tag: string) => parseTagToTagObject(tag.trim())),
        brief: talkVersionRaw.brief,
      };

      if (talkVersionRaw.conference) {
        talkData.versions[language].conference = {
          name: talkVersionRaw.conference.$.name,
          location: talkVersionRaw.conference.$.location,
        };
      }

      if (talkVersionRaw.content) {
        talkData.versions[language].content = talkVersionRaw.content;
        talkData.versions[language].contentFileName = generateContentFileName(talkVersionRaw.title);
        talkData.versions[language].niceUrl = parseTextToNiceUrl(talkVersionRaw.title);
      }
    }
  });

  return talkData;
};
