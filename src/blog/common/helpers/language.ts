import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE_NAME, LANGUAGE_QUERY_STRING_PARAM_NAME } from '/common/constants/index';
import { isLanguageValid } from '/common/helpers/index';
import { Language } from '/common/types';
import { getFromCookie, setInCookie } from './cookie';
import { getFromQueryString, setInQueryString } from './queryString';

export const getCurrentLanguage = (): Language => {
  const languageFromQueryString = getFromQueryString(LANGUAGE_QUERY_STRING_PARAM_NAME);

  if (languageFromQueryString && isLanguageValid(languageFromQueryString.toLowerCase())) {
    return languageFromQueryString.toLowerCase() as Language;
  }

  const languageFromCookie = getFromCookie(LANGUAGE_COOKIE_NAME);
  if (languageFromCookie && isLanguageValid(languageFromCookie)) {
    return languageFromCookie as Language;
  }

  return DEFAULT_LANGUAGE;
};

export const setCurrentLanguage = (language: Language): void => {
  setInCookie(LANGUAGE_COOKIE_NAME, language);
  setInQueryString({ [LANGUAGE_QUERY_STRING_PARAM_NAME]: language });
};