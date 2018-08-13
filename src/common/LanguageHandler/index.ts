import * as queryString from 'query-string';
import * as cookies from 'js-cookie';

import RoutingProvider from 'common/RoutingProvider';

import {
  languages,
  defaultLanguage,
  languageParameter,
} from './constants';

class LanguageHandler {

  static getCurrentLanguage(): string {
    const queryStringParsed = queryString.parse(location.search);

    if (queryStringParsed && queryStringParsed[languageParameter]) {
      const languageFromQueryString = queryStringParsed[languageParameter].toLowerCase();

      if (this.isLanguageValid(languageFromQueryString)) {
        return languageFromQueryString;
      }
    }

    const languageFromCookie = cookies.get('language');
    if (languageFromCookie && this.isLanguageValid(languageFromCookie)) {
      return languageFromCookie;
    }

    return defaultLanguage;
  }

  static setCurrentLanguage(language: string): void {
    cookies.set('language', language);
    RoutingProvider.setInQueryString({ [languageParameter]: language });
  }

  static isLanguageValid(language: string): boolean {
    for (const key in languages) {
      if (languages.hasOwnProperty(key)) {
        if (language === languages[key]) {
          return true;
        }
      }
    }
    return false;
  }
}

export default LanguageHandler;
