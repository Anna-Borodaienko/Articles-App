import { api } from "../api.helper";

import { Article } from "../../models/Article";


class ArticlesService {
  endpoint = '/articles';

  async getArticles(
    // title: string, 
    // description: string,
  ): Promise<Article[]> {
    const params = {};
    // const params = {
    //   '_where[_or][0][title_contains]': '',
    //   '_where[_or][1][summary_contains]': '',
    // };

    // if (title) {
    //   params['_where[_or][0][title_contains]'] = title
    // };

    // if (description) {
    //   params['_where[_or][1][summary_contains]'] = description
    // }

    const articles = await api.get<any[]>(params);

    return articles.map(article => 
      new Article({
        id: article.id,
        title: article.title,
        url: article.url,
        imageUrl: article.imageUrl,
        description: article.summary,
        publishedAt: article.publishedAt,
      }));
  }
}

export const articlesService = new ArticlesService();
