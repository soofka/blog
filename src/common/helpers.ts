import {LANGUAGES} from "./constants";

export const parseTextToNiceUrl = (text: string): string =>
  text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[!|?|.|,|:|;|"|'|(|)|{|}|\[|\]|\\|\/]/g, '');

export const isLanguageValid = (language) => {
  const languageKeys = Object.keys(LANGUAGES);

  for (let i = 0; i < languageKeys.length; i++) {
    if (LANGUAGES[languageKeys[i]] === language) {
      return true;
    }
  }

  return false;
};
