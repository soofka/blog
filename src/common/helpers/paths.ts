import {blogConfig, ENTRIES_DIRECTORY_NAME, IMAGES_DIRECTORY_NAME} from "../constants";

export const getEntryFilePath = (entryFileName: string, language: string, absolute: boolean = false) =>
  `${absolute ? blogConfig.url : ''}/${ENTRIES_DIRECTORY_NAME}/${language}/${entryFileName}`;

export const getImageFilePath = (imageFileName: string, absolute: boolean = false) =>
  `${absolute ? blogConfig.url : ''}/${IMAGES_DIRECTORY_NAME}/${imageFileName}`;
