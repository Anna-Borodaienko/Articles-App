import { api } from '../ApiHelper';

import { Article } from '../../models/Article';

class ArticlesService {
  endpoint = '/articles';

  async getArticles(from: number, to: number, filter?: string): Promise<Article[]> {
    const filterArray = filter?.trim().split(' ');

    const params: any = {
      _limit: to - from,
      _start: from,
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
        imageUrl: article.imageUrl,
        description: article.summary,
        publishedAt: article.publishedAt,
      };
    });
  }

  async getNumberOfArticles(filter?: string): Promise<number> {
    const filterArray = filter?.trim().split(' ');

    const params: any = {};

    if (filter) {
      params['_where[_or][title_contains]'] = filterArray;
      params['_where[_or][summary_contains]'] = filterArray;
    }

    const numberOfArticles = await api.get<number>(`${this.endpoint}/count`, params);

    return numberOfArticles;
  }

  async getById(id: number): Promise<Article> {
    const article = await api.get<any>(`${this.endpoint}/${id}`);
    return {
      id: article.id,
      title: article.title,
      imageUrl: article.imageUrl,
      description: article.summary,
      publishedAt: article.publishedAt,
    };
  }
}

export const articlesService = new ArticlesService();
