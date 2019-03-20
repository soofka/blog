import axios, { AxiosError, AxiosResponse, AxiosStatic } from 'axios';

export interface RequestSuccessResponseInterface extends AxiosResponse {}
export interface RequestFailureResponseInterface extends AxiosError {}
export type RequestResponseInterface = RequestSuccessResponseInterface | RequestFailureResponseInterface;

export const getRequestClient = (): AxiosStatic => axios;

export const validateRequestSuccessResponse = (
  response: RequestSuccessResponseInterface,
  withData: boolean = false,
): boolean =>
  response && response.status === 200 && (withData ? response.data : true);
