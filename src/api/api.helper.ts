import axios from "axios";
import qs from 'qs';

class Api {
  private BASE_URL = "https://api.spaceflightnewsapi.net/v3/articles";

  async get<Response>(
    // url: string,
    params?: object,
  ): Promise<Response> {
    const { data } = await axios(`${this.BASE_URL}?${qs.stringify(params)}`);

    return data;
  }
}

export const api = new Api();
