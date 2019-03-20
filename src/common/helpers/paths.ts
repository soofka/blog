import {
  ABOUT_ME_BASE_URL, ARCHIVE_BASE_URL, blogConfig, ENTRIES_DIRECTORY_NAME, ENTRY_BASE_URL, ERROR_BASE_URL,
  HOME_BASE_URL,
  IMAGES_DIRECTORY_NAME, TAG_BASE_URL, TALK_BASE_URL, TALKS_BASE_URL
} from "../constants";

export const getHomeBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(HOME_BASE_URL, absolute);

export const getEntryBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(ENTRY_BASE_URL, absolute);

export const getTalkBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(TALK_BASE_URL, absolute);

export const getTalksBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(TALKS_BASE_URL, absolute);

export const getTagBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(TAG_BASE_URL, absolute);

export const getArchiveBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(ARCHIVE_BASE_URL, absolute);

export const getAboutMeBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(ABOUT_ME_BASE_URL, absolute);

export const getErrorBaseUrl = (absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(ERROR_BASE_URL, absolute);

export const getEntryFilePath = (entryFileName: string, language: string, absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(`/${ENTRIES_DIRECTORY_NAME}/${language}/${entryFileName}`, absolute);

export const getImageFilePath = (imageFileName: string, absolute: boolean = false): string =>
  decorateWithAbsoluteBasePathConditionally(`/${IMAGES_DIRECTORY_NAME}/${imageFileName}`, absolute);

const decorateWithAbsoluteBasePathConditionally = (path: string, absolute: boolean = false): string =>
  `${absolute ? blogConfig.url : ''}${path}`;
