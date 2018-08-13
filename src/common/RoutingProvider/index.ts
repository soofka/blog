import * as queryString from 'query-string';

import {
  homeNiceUrlBasePath,
  aboutNiceUrlBasePath,
  entryNiceUrlBasePath,
  entriesByTagNiceUrlBasePath,
  entriesByDateNiceUrlBasePath,
  errorNiceUrlBasePath,
} from './constants';

export class RoutingProvider {
  static getHomeNiceUrlBasePath(): string {
    return homeNiceUrlBasePath;
  }

  static getAboutNiceUrlBasePath(): string {
    return aboutNiceUrlBasePath;
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
      .replace(/[!|?|.|,|:|;]/g, '');
  }
}

export default RoutingProvider;
