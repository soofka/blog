import { TAGS_DESTINATION_PATH } from 'common/constants';
import { forceCreateDirectory, saveDataFile } from './helpers';

export const createTagsFiles = (entries, talks) => {
  createTagsDestinationDirectory();
  const tags = {};

  Object.keys(entries).forEach((language) => {
    if (!tags.hasOwnProperty(language)) {
      tags[language] = [];
    }
    entries[language].forEach((entry) => {
      tags[language] = combineTagsArrays(tags[language], entry.tags);
    });
  });

  Object.keys(talks).forEach((language) => {
    if (!tags.hasOwnProperty(language)) {
      tags[language] = [];
    }
    talks[language].forEach((talk) => {
      tags[language] = combineTagsArrays(tags[language], talk.tags);
    });
  });

  Object.keys(tags).forEach((language) => {
    saveTagsFile(tags[language], language);
  });
};

const combineTagsArrays = (allTags, tagsToBeAdded) => {
  const newAllTags = allTags ? allTags.slice() : [];
  const uniqueTagsToBeAdded = tagsToBeAdded.filter((tag1, index) =>
    tagsToBeAdded.findIndex((tag2) => tag1.id === tag2.id) === index,
  );

  uniqueTagsToBeAdded.forEach((tagToBeAdded) => {
    const existingTagIndex = newAllTags.findIndex((existingTag) => existingTag.id === tagsToBeAdded.id);

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

const createTagsDestinationDirectory = () =>
  forceCreateDirectory(TAGS_DESTINATION_PATH);

const saveTagsFile = (tags, language) =>
  saveDataFile(TAGS_DESTINATION_PATH, tags, 'tags', language);
