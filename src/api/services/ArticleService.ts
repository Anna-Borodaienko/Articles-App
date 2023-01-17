/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { api } from '../ApiHelper';

import { Article } from '../../models/Article';

class ArticlesService {
  endpoint = '/articles';

  async getArticles(filter?: string): Promise<Article[]> {
    const filterArray = filter
      ?.trim()
      .split(' ')
      .map((item) => ` ${item} `);

    const params: any = {
      _limit: 30,
    };

    if (filter) {
      params['_where[_or][title_contains]'] = filterArray;
      params['_where[_or][summary_contains]'] = filterArray;
    }

    const articles = await api.get<any[]>(this.endpoint, params);

    return articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        url: article.url,
        imageUrl: article.imageUrl,
        description: article.summary,
        publishedAt: article.publishedAt,
      };
    });
  }

  async getById(id: number): Promise<Article> {
    const article = await api.getById<any>(this.endpoint, id);
    return {
      id: article.id,
      title: article.title,
      url: article.url,
      imageUrl: article.imageUrl,
      description: article.summary,
      publishedAt: article.publishedAt,
    };
  }
}

export const articlesService = new ArticlesService();
