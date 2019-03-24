import * as path from 'path';
import { LANGUAGES } from './languages';

export const CONTENT_DIRECTORY_NAME = 'content';
export const RAW_CONTENT_DIRECTORY_NAME = 'raw';
export const GENERATED_CONTENT_DIRECTORY_NAME = 'generated';
export const STATIC_CONTENT_DIRECTORY_NAME = 'static';

export const IMAGES_DIRECTORY_NAME = 'images';
export const ENTRIES_DIRECTORY_NAME = 'entries';
export const TALKS_DIRECTORY_NAME = 'talks';
export const ARCHIVE_DIRECTORY_NAME = 'archive';
export const TAGS_DIRECTORY_NAME = 'tags';
export const FEED_DIRECTORY_NAME = 'feed';
export const SLIDES_DIRECTORY_NAME = 'slides';

export const RAW_CONTENT_PATH = path.join(CONTENT_DIRECTORY_NAME, RAW_CONTENT_DIRECTORY_NAME);
export const GENERATED_CONTENT_PATH = path.join(CONTENT_DIRECTORY_NAME, GENERATED_CONTENT_DIRECTORY_NAME);
export const STATIC_CONTENT_PATH = path.join(CONTENT_DIRECTORY_NAME, STATIC_CONTENT_DIRECTORY_NAME);

export const ENTRIES_SOURCE_PATH = path.join(RAW_CONTENT_PATH, ENTRIES_DIRECTORY_NAME);
export const TALKS_SOURCE_PATH = path.join(RAW_CONTENT_PATH, TALKS_DIRECTORY_NAME);

export const ENTRIES_DESTINATION_PATH = path.join(GENERATED_CONTENT_PATH, ENTRIES_DIRECTORY_NAME);
export const TALKS_DESTINATION_PATH = path.join(GENERATED_CONTENT_PATH, TALKS_DIRECTORY_NAME);
export const ARCHIVE_DESTINATION_PATH = path.join(GENERATED_CONTENT_PATH, ARCHIVE_DIRECTORY_NAME);
export const TAGS_DESTINATION_PATH = path.join(GENERATED_CONTENT_PATH, TAGS_DIRECTORY_NAME);
export const FEED_DESTINATION_PATH = path.join(GENERATED_CONTENT_PATH, FEED_DIRECTORY_NAME);
export const MANIFEST_DESTINATION_PATH = GENERATED_CONTENT_PATH;

const entriesJsonPaths = {};
const tagsJsonPaths = {};

Object.keys(LANGUAGES).forEach((languageKey) => {
  const language = LANGUAGES[languageKey];
  entriesJsonPaths[language] = `/${ENTRIES_DIRECTORY_NAME}/entries.${language}.json`;
  tagsJsonPaths[language] = `/${TAGS_DIRECTORY_NAME}/tags.${language}.json`;
});

export const ENTRIES_JSON_PATHS = entriesJsonPaths;
export const TAGS_JSON_PATHS = tagsJsonPaths;

export const HOME_BASE_URL = '/';
export const ENTRY_BASE_URL = '/entry';
export const TALK_BASE_URL = '/talk';
export const TALKS_BASE_URL = '/talks';
export const TAG_BASE_URL = '/tag';
export const ARCHIVE_BASE_URL = '/archive';
export const ABOUT_ME_BASE_URL = '/about';
export const ERROR_BASE_URL = '/error';
