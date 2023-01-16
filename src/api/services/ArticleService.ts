import { api } from "../ApiHelper";

import { Article } from "../../models/Article";


class ArticlesService {
  endpoint = '/articles';

  async getArticles(
    title?: string, 
    description?: string,
  ): Promise<Article[]> {
    const params: any = {};
   
    if (title) {
      params['_where[_or][0][title_contains]'] = title
    };

    if (description) {
      params['_where[_or][1][summary_contains]'] = description
    }

    const articles = await api.get<any[]>(this.endpoint, params);

    return articles.map(article => {
      return {
        id: article.id,
        title: article.title,
        url: article.url,
        imageUrl: article.imageUrl,
        description: article.summary,
        publishedAt: article.publishedAt,
      }
    });    
  };

  async getById(id: number): Promise<Article> {
    const article = await api.getById<any>(this.endpoint, id);
    return {
      id: article.id,
      title: article.title,
      url: article.url,
      imageUrl: article.imageUrl,
      description: article.summary,
      publishedAt: article.publishedAt,
    }

  }
}

export const articlesService = new ArticlesService();
