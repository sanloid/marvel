import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { ContentType } from 'types/api/ContentType';
import { ResponsesTypes } from 'types/api/ResponsesType';

export default {
  async getList(
    page: number,
    limit: number,
    apiPath: string
  ): Promise<ResponsesTypes> {
    const ts = Date.now();
    const response = axios.get(`/${apiPath}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts,
        offset: (page - 1) * limit,
        limit
      }
    });
    return response.then((e) => e.data).catch((e) => e.response.data);
  },
  async getOne(id: string, apiPath: string): Promise<ResponsesTypes> {
    const ts = Date.now();
    const response = axios.get(`/${apiPath}/${id}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts,
        limit: 1
      }
    });
    return response.then((e) => e.data).catch((e) => e.response.data);
  },
  async searchByName(
    name: string,
    limit: number,
    page: number,
    apiPath: string,
    param: string
  ): Promise<ResponsesTypes> {
    const ts = Date.now();
    const response = await axios.get(`/${apiPath}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        [`${param}StartsWith`]: name,
        offset: (page - 1) * limit,
        limit,
        ts
      }
    });
    return response.data;
  },
  async getContent(
    id: string,
    apiPath: string,
    content: string
  ): Promise<ContentType> {
    const ts = Date.now();
    const response = await axios.get(`/${apiPath}/${id}/${content}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(ts + environments.privateKey + environments.apiKey),
        ts
      }
    });
    return response.data;
  }
};
