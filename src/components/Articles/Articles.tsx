/* eslint-disable @typescript-eslint/no-floating-promises */
import { Grid, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useArticles } from '../../hooks/useArticles';
import { ArticleCard } from '../Article/ArticleCard';
import { SearchField } from '../SearchField/SearchField';
import { Loader } from '../Loader/Loader';
import { ArticlePagination } from '../ArticlePagination/ArticlePagination';
import { usePaginate } from '../../hooks/usePaginate';

export const Articles: React.FC = () => {
  const [filter, setFilter] = useState('');
  const { page, pageCount, count, handlePageChange, firstArticleOnPage, resetPages } =
    usePaginate(filter);
  const { articles, isLoading } = useArticles(filter, firstArticleOnPage);

  const handleFilterChanging = useCallback(
    (filter: string) => {
      setFilter(filter);
      resetPages();
    },
    [resetPages],
  );

  return (
    <>
      <SearchField setFilter={handleFilterChanging} />

      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Results: {count}
      </Typography>

      {isLoading && <Loader />}

      <Grid container spacing={10} direction="row" justifyContent="center" alignItems="center">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item} highlightedWords={filter.split(' ')} />
        ))}
      </Grid>

      <ArticlePagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
    </>
  );
};
