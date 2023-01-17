import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useArticles } from '../../hooks/useArticles';
import { ArticleCard } from '../Article/ArticleCard';
import { SearchField } from '../SearchField/SearchField';
import { Loader } from '../Loader/Loader';
import { ArticlePagination } from '../ArticlePagination/ArticlePagination';
import { usePaginate } from '../../hooks/usePaginate';
import { articlesService } from '../../api/services/ArticleService';

export const Articles: React.FC = () => {
  const [filter, setFilter] = useState('');
  const { page, pageCount, count, handlePageChange, from, to, resetPages } = usePaginate(() =>
    articlesService.getNumberOfArticles(filter),
  );
  const { articles, isLoading } = useArticles(from, to, filter);

  useEffect(() => {
    resetPages();
  }, [filter, resetPages]);

  return (
    <>
      <SearchField setFilter={setFilter} />

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
