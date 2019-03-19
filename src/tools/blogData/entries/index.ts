import {
  ENTRIES_SOURCE_PATH,
  ENTRIES_DESTINATION_PATH,
  IMAGES_DIRECTORY_NAME,
  LANGUAGES,
} from 'common/constants';
import {
  parseTextToNiceUrl,
  isLanguageValid,
} from 'common/helpers';
import {
  createContentFiles,
  generateContentFileName,
  generateIdBasedOnDateString,
  parseTagToTagObject,
} from 'tools/blogData/common';

export const createEntriesFiles = (environment): void =>
  createContentFiles(
    ENTRIES_SOURCE_PATH,
    ENTRIES_DESTINATION_PATH,
    'entries',
    environment,
    formatEntryData,
  );

const formatEntryData = (entryDataRaw) => {
  const id = generateIdBasedOnDateString(entryDataRaw.$.created);
  const entryData = {
    meta: {
      id,
      url: `/${id}`,
      public: !!entryDataRaw.$.public,
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
