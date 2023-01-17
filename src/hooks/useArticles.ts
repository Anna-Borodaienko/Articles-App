/* eslint-disable @typescript-eslint/no-floating-promises */
import { useCallback, useEffect, useState } from 'react';
import { Article } from '../models/Article';
import { articlesService } from '../api/services/ArticleService';

export const useArticles = (filter: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sortArticles = useCallback((articles: Article[], filter: string): Article[] => {
    return articles.sort((a1, a2) => compare(a1, a2, filter));
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const fetchedArticles = await articlesService.getArticles(filter);
      const sortedArticles = sortArticles(fetchedArticles, filter);
      setArticles(sortedArticles);
      setIsLoading(false);
    })();
  }, [filter, sortArticles]);

  const compare = (first: Article, other: Article, filter: string): number => {
    const titleIncludesFilter = first.title.includes(filter);
    const descriptionIncludesFilter = first.description.includes(filter);
    const otherTitleIncludesFilter = other.title.includes(filter);
    const otherDescriptionIncludesFilter = other.description.includes(filter);

    if (titleIncludesFilter && otherTitleIncludesFilter) {
      if (descriptionIncludesFilter && otherDescriptionIncludesFilter) return 0;
      if (descriptionIncludesFilter && !otherDescriptionIncludesFilter) return -1;
      return 1;
    }

    if (titleIncludesFilter && !otherTitleIncludesFilter) return -1;
    if (!titleIncludesFilter && otherTitleIncludesFilter) return 1;

    return 0;
  };

  return { articles, isLoading };
};
