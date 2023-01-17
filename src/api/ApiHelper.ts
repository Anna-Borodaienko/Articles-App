/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import qs from 'qs';

class Api {
  private BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

  async get<Response>(url: string, params?: object): Promise<Response> {
    const { data } = await axios(`${this.BASE_URL}${url}?${qs.stringify(params)}`);

    return data;
  }

  async getById<Response>(url: string, id: number): Promise<Response> {
    const { data } = await axios(`${this.BASE_URL}${url}/${id}`);

    return data;
  }

  async getArticleCount<Response>(url: string, params?: object): Promise<Response> {
    const { data } = await axios(`${this.BASE_URL}${url}/count?${qs.stringify(params)}`);

    return data;
  }
}

export const api = new Api();
