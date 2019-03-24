import { TAGS_DESTINATION_PATH } from 'common/constants';
import { Language } from 'common/types';
import { EntriesInterface, EntryInterface } from './entries';
import { forceCreateDirectory, saveDataFile, TagInterface } from './helpers';
import { TalkInterface, TalksInterface } from './talks';

interface CountedTagInterface extends TagInterface {
  count: number;
}

export const createTagsFiles = (entries: EntriesInterface, talks: TalksInterface): void => {
  createTagsDestinationDirectory();
  const tags = {};

  Object.keys(entries).forEach((language: Language) => {
    if (!tags.hasOwnProperty(language)) {
      tags[language] = [];
    }
    entries[language].forEach((entry: EntryInterface) => {
      tags[language] = combineTagsArrays(tags[language], entry.tags);
    });
  });

  Object.keys(talks).forEach((language: Language) => {
    if (!tags.hasOwnProperty(language)) {
      tags[language] = [];
    }
    talks[language].forEach((talk: TalkInterface) => {
      tags[language] = combineTagsArrays(tags[language], talk.tags);
    });
  });

  Object.keys(tags).forEach((language: Language) => {
    saveTagsFile(tags[language], language);
  });
};

const combineTagsArrays = (allTags: CountedTagInterface[], tagsToBeAdded: TagInterface[]): CountedTagInterface[] => {
  const newAllTags = allTags ? allTags.slice() : [];
  const uniqueTagsToBeAdded = tagsToBeAdded.filter((tag1, index) =>
    tagsToBeAdded.findIndex((tag2) => tag1.id === tag2.id) === index,
  );

  uniqueTagsToBeAdded.forEach((tagToBeAdded: TagInterface) => {
    const existingTagIndex = newAllTags.findIndex((existingTag) => existingTag.id === tagToBeAdded.id);

    if (existingTagIndex === -1) {
      newAllTags.push({
        ...tagToBeAdded,
        count: 1,
      });
    } else {
      if (newAllTags[existingTagIndex].count && !isNaN(newAllTags[existingTagIndex].count)) {
        newAllTags[existingTagIndex].count += 1;
      } else {
        newAllTags[existingTagIndex].count = 1;
      }
    }
  });
  return newAllTags;
};

const createTagsDestinationDirectory = (): void =>
  forceCreateDirectory(TAGS_DESTINATION_PATH);

const saveTagsFile = (tags: CountedTagInterface[], language: Language): void =>
  saveDataFile(TAGS_DESTINATION_PATH, tags, language, 'tags');
