import axios, { AxiosResponse, AxiosError } from 'axios';

import {
  entriesJsonPath,
  imagesBasePath,
  entriesBasePath,
  entryDefaultFileName,
  imageDefaultFileName,
} from './constants';

export interface AssetsProviderResponse extends AxiosResponse {}

export class AssetsProvider {
  static getEntries(): Promise<AssetsProviderResponse> {
    return axios
      .get(entriesJsonPath)
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        return error.response;
      });
  }

  static getEntryContent(entryFilePath: string): Promise<AssetsProviderResponse> {
    return axios
      .get(entryFilePath)
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        return error.response;
      });
  }

  static getImagesBasePath() {
    return imagesBasePath;
  }

  static getEntriesBasePath() {
    return entriesBasePath;
  }

  static getEntryFilePath(entryFileName?: string) {
    return `${entriesBasePath}/${entryFileName || entryDefaultFileName}`;
  }

  static getEntryImageFilePath(imageFileName?: string) {
    return `${imagesBasePath}/${imageFileName || imageDefaultFileName}`;
  }
}

export default AssetsProvider;
