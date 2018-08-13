import axios, { AxiosResponse, AxiosError } from 'axios';

export interface RequestHandlerResponseInterface extends AxiosResponse {}
export interface RequestHandlerErrorInterface extends AxiosError {}

export class RequestHandler {
  static getClient() {
    return axios;
  }

  static validateResponse(response: RequestHandlerResponseInterface): boolean {
    return response.status === 200 && response.data;
  }
}

export default RequestHandler;
