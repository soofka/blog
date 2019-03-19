import RequestHandler, { RequestHandlerResponseInterface, RequestHandlerErrorInterface } from 'common/RequestHandler';

import {
  entriesJsonPath,
  imagesBasePath,
  entriesBasePath,
  entryDefaultFileName,
  imageDefaultFileName,
} from './constants';

export class AssetsProvider {
  static getEntries(
    language: string,
  ): Promise<RequestHandlerResponseInterface | RequestHandlerErrorInterface> {
    return RequestHandler.getClient()
      .get(entriesJsonPath[language])
      .then((response: RequestHandlerResponseInterface) => {
        return response;
      })
      .catch((error: RequestHandlerErrorInterface) => {
        return error.response;
      });
  }

  static getEntryContent(
    entryFilePath: string,
  ): Promise<RequestHandlerResponseInterface | RequestHandlerErrorInterface> {
    return RequestHandler.getClient()
      .get(entryFilePath)
      .then((response: RequestHandlerResponseInterface) => {
        return response;
      })
      .catch((error: RequestHandlerErrorInterface) => {
        return error.response;
      });
  }

  static getImagesBasePath() {
    return imagesBasePath;
  }

  static getEntriesBasePath() {
    return entriesBasePath;
  }

  static getEntryFilePath(language: string, entryFileName?: string) {
    return `${entriesBasePath}/${language}/${entryFileName || entryDefaultFileName}`;
  }

  static getEntryImageFilePath(imageFileName?: string) {
    return `${imagesBasePath}/${imageFileName || imageDefaultFileName}`;
  }
}

export default AssetsProvider;
