import { LANGUAGES } from 'common/constants';

export const isLanguageValid = (language) => {
  const languageKeys = Object.keys(LANGUAGES);

  for (let i = 0; i < languageKeys.length; i++) {
    if (LANGUAGES[languageKeys[i]] === language) {
      return true;
    }
  }

  return false;
};
