/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from 'react';
import { articlesService } from '../api/services/ArticleService';
import { ArticlesPerPage } from '../common/enums/ArticlesPerPage';

export const usePaginate = (filter: string) => {
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const resetPages = () => {
    setPage(1);
  };

  const firstArticleOnPage =
    page * ArticlesPerPage.ArticlesNumberPerPage - ArticlesPerPage.ArticlesNumberPerPage;

  useEffect(() => {
    (async () => {
      let count = await articlesService.getNumberOfArticles(filter);
      count = Math.ceil(count / ArticlesPerPage.ArticlesNumberPerPage);
      setPageCount(count);
    })();
  }, [filter]);

  return { page, pageCount, handlePageChange, firstArticleOnPage, resetPages };
};
