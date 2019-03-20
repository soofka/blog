import { Language } from '../types';

export const LANGUAGES: { [s: string]: Language } = {
  EN: 'en',
  PL: 'pl',
};
export const DEFAULT_LANGUAGE: Language = LANGUAGES.EN;
export const LANGUAGE_COOKIE_NAME = 'language';
export const LANGUAGE_QUERY_STRING_PARAM_NAME = 'language';
