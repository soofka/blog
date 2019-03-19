import * as queryString from 'query-string';

import {
  homeNiceUrlBasePath,
  aboutMeNiceUrlBasePath,
  talksNiceUrlBasePath,
  archiveNiceUrlBasePath,
  entryNiceUrlBasePath,
  entriesByTagNiceUrlBasePath,
  entriesByDateNiceUrlBasePath,
  errorNiceUrlBasePath,
} from './constants';

export class RoutingProvider {
  static getHomeNiceUrlBasePath(): string {
    return homeNiceUrlBasePath;
  }

  static getAboutMeNiceUrlBasePath(): string {
    return aboutMeNiceUrlBasePath;
  }

  static getTalksNiceUrlBasePath(): string {
    return talksNiceUrlBasePath;
  }

  static getArchiveNiceUrlBasePath(): string {
    return archiveNiceUrlBasePath;
  }

  static getEntryNiceUrlBasePath(): string {
    return entryNiceUrlBasePath;
  }

  static getEntriesByTagNiceUrlBasePath(): string {
    return entriesByTagNiceUrlBasePath;
  }

  static getEntriesByDateNiceUrlBasePath(): string {
    return entriesByDateNiceUrlBasePath;
  }

  static getErrorNiceUrlBasePath(): string {
    return errorNiceUrlBasePath;
  }

  static setInQueryString(object: any) {
    const oldQueryStringObject = queryString.parse(location.search);
    const newQueryStringObject = { ...oldQueryStringObject, ...object };
    history.pushState(null, '', `?${queryString.stringify(newQueryStringObject)}`);
  }

  static parseTextToNiceUrl(text: string): string {
    return text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[!|?|.|,|:|;|(|)|{|}|\[|\]|\\|\/]/g, '');
  }
}

export default RoutingProvider;
