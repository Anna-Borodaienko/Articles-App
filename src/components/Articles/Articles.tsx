import { Grid, Typography } from "@mui/material";
import React, { useState } from "react"
import { useArticles } from "../../hooks/useArticles";
import { ArticleCard } from "../Article/ArticleCard";
import { SearchField } from "../SearchField/SearchField";

export const Articles: React.FC = () => {
  const [filter, setFilter] = useState('');
  const { articles } = useArticles(filter); 
 
  return (
    <>
      <SearchField setFilter={setFilter} />

      <Typography variant="subtitle1" sx={{mb: 2}}>
        Results: {articles.length}
      </Typography>

      <Grid 
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {articles.map(item => <ArticleCard key={item.id} article={item} highlightedWords={filter.split(' ')}/>)}
      </Grid>
    </>
    
  )
}