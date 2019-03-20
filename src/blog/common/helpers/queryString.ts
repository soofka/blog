import * as queryString from 'query-string';

export const getCurrentQueryString = (): { [s: string]: string } => queryString.parse(location.search);

export const getFromQueryString = (key: string): string | undefined => {
  const currentQueryString = getCurrentQueryString();

  if (currentQueryString.hasOwnProperty(key)) {
    return currentQueryString[key];
  }

  return undefined;
};

export const setInQueryString = (object: { [s: string]: string }): void => {
  const oldQueryStringObject = queryString.parse(location.search);
  const newQueryStringObject = { ...oldQueryStringObject, ...object };
  history.pushState(null, '', `?${queryString.stringify(newQueryStringObject)}`);
};
