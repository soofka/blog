import {
  getRequestClient,
  RequestFailureResponseInterface,
  RequestResponseInterface,
  RequestSuccessResponseInterface,
} from './request';
import { ENTRIES_JSON_PATHS } from '/common/constants/index';
import { Language } from '/common/types';

export const getEntries = (language: Language): Promise<RequestResponseInterface> =>
  getRequestClient()
    .get(ENTRIES_JSON_PATHS[language])
    .then((response: RequestSuccessResponseInterface) => response)
    .catch((error: RequestFailureResponseInterface) => error.response);

export const getEntryContent = (entryFilePath: string): Promise<RequestResponseInterface> =>
  getRequestClient()
    .get(entryFilePath)
    .then((response: RequestSuccessResponseInterface) => response)
    .catch((error: RequestFailureResponseInterface) => error.response);
