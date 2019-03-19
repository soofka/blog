import
  RequestHandler, {
  RequestHandlerResponseInterface,
  RequestHandlerErrorInterface,
} from 'blog/common/RequestHandler';

import {
  entriesJsonPath,
  imagesBasePath,
  entriesBasePath,
  entryDefaultFileName,
  imageDefaultFileName,
} from './constants';

import { ENTRIES_JSON_PATHS } from 'common/constants';

export const getEntries = (
  language: string,
): Promise<RequestHandlerResponseInterface | RequestHandlerErrorInterface> =>
  RequestHandler.getClient()
    .get(entriesJsonPath[language])
    .then((response: RequestHandlerResponseInterface) => {
      return response;
    })
    .catch((error: RequestHandlerErrorInterface) => {
      return error.response;
    });

export const getEntryContent = (
  entryFilePath: string,
): Promise<RequestHandlerResponseInterface | RequestHandlerErrorInterface> =>
  RequestHandler.getClient()
    .get(entryFilePath)
    .then((response: RequestHandlerResponseInterface) => {
      return response;
    })
    .catch((error: RequestHandlerErrorInterface) => {
      return error.response;
    });

export const getEntryFilePath = (language: string, entryFileName?: string) =>
  `${entriesBasePath}/${language}/${entryFileName || entryDefaultFileName}`;

export const getEntryImageFilePath = (imageFileName?: string) =>
  `${imagesBasePath}/${imageFileName || imageDefaultFileName}`;
