import {
  ENTRIES_DESTINATION_PATH,
  ENTRIES_SOURCE_PATH,
  IMAGES_DIRECTORY_NAME,
  LANGUAGES,
} from 'common/constants';
import {
  isLanguageValid,
  parseTextToNiceUrl,
} from 'common/helpers';
import { EntriesInterface, Environment, Language, TagsInterface } from 'common/types';
import {
  createContentFiles,
  generateContentFileName,
  generateIdBasedOnDateString,
  parseTagToTagObject,
} from 'tools/blogData/helpers';

interface EntryVersionsRawInterface {
  $: {
    public: boolean;
    created: string;
    updated: string;
    image: string;
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
    brief: string;
    content: string;
  }[];
}

interface EntryVersionsInterface {
  meta: EntryMetaInterface;
  versions: {
    [s: string]: EntryVersionInterface;
  };
}

export interface EntryMetaInterface {
  id: string;
  url: string;
  public: boolean;
  created: string;
  updated: string;
  imageUrl: string;
}

export interface EntryVersionInterface {
  title: string;
  tags: TagsInterface;
  brief: string;
  content?: string;
  contentFileName?: string;
  niceUrl?: string;
}

export const createEntriesFiles = (environment: Environment): EntriesInterface =>
  createContentFiles(
    ENTRIES_SOURCE_PATH,
    ENTRIES_DESTINATION_PATH,
    'entries',
    environment,
    formatEntryData,
  );

const formatEntryData = (entryDataRaw: EntryVersionsRawInterface): EntryVersionsInterface => {
  const id = generateIdBasedOnDateString(entryDataRaw.$.created);
  const entryData: EntryVersionsInterface = {
    meta: {
      id,
      url: `/${id}`,
      public: entryDataRaw.$.public,
      created: entryDataRaw.$.created,
      updated: entryDataRaw.$.updated,
      imageUrl: `/${IMAGES_DIRECTORY_NAME}/${entryDataRaw.$.image}`,
    },
    versions: {},
  };

  entryDataRaw.version.forEach((entryVersionRaw) => {
    const language = entryVersionRaw.$.language;

    if (isLanguageValid(language)) {
      entryData.versions[language] = {
        title: entryVersionRaw.title,
        tags: entryVersionRaw.tags.$.list.split(',').map((tag: string) => parseTagToTagObject(tag.trim())),
        brief: entryVersionRaw.brief,
      };

      if (entryVersionRaw.content) {
        entryData.versions[language].content = entryVersionRaw.content;
        entryData.versions[language].contentFileName = generateContentFileName(entryVersionRaw.title);
        entryData.versions[language].niceUrl = parseTextToNiceUrl(entryVersionRaw.title);
      }
    }
  });

  return entryData;
};
