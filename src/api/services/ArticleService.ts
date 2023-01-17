import { api } from '../ApiHelper';

import { Article } from '../../models/Article';
import { ArticlesPerPage } from '../../common/enums/ArticlesPerPage';

class ArticlesService {
  endpoint = '/articles';

  async getArticles(firstArticleOnPage: number, filter?: string): Promise<Article[]> {
    const filterArray = filter?.trim().split(' ');

    const params: any = {
      _limit: ArticlesPerPage.ArticlesNumberPerPage,
      _start: firstArticleOnPage,
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

  async getNumberOfArticles(filter?: string): Promise<number> {
    const filterArray = filter?.trim().split(' ');

    const params: any = {
      _limit: ArticlesPerPage.ArticlesNumberPerPage,
    };

    if (filter) {
      params['_where[_or][title_contains]'] = filterArray;
      params['_where[_or][summary_contains]'] = filterArray;
    }

    const numberOfArticles = await api.getArticleCount<number>(this.endpoint, params);

    return numberOfArticles;
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
