import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useArticles } from '../../hooks/useArticles';
import { ArticleCard } from '../Article/ArticleCard';
import { SearchField } from '../SearchField/SearchField';
import { Loader } from '../Loader/Loader';

export const Articles: React.FC = () => {
  const [filter, setFilter] = useState('');
  const { articles, isLoading } = useArticles(filter);

  return (
    <>
      <SearchField setFilter={setFilter} />

      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Results: {articles.length}
      </Typography>

      {isLoading && <Loader />}

      <Grid container spacing={10} direction="row" justifyContent="center" alignItems="center">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item} highlightedWords={filter.split(' ')} />
        ))}
      </Grid>
    </>
  );
};
