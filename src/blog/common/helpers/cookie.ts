import * as cookies from 'js-cookie';

export const getAllCookies = (): { [s: string]: string } => cookies.get();

export const getFromCookie = (name: string): string => cookies.get(name);

export const setInCookie = (name: string, value: string, expiresInDays?: number, path?: string): void => {
  const configuration: { expires?: number; path?: string; } = {};

  if (expiresInDays && !isNaN(expiresInDays)) {
    configuration.expires = expiresInDays;
  }
  if (path) {
    configuration.path = path;
  }

  cookies.set(name, value, configuration);
};

export const removeCookie = (name: string, path?: string): void => {
  const configuration: { path?: string } = {};

  if (path) {
    configuration.path = path;
  }

  cookies.remove(name, configuration);
};
