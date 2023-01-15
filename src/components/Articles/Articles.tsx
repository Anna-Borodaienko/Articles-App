import { Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { articlesService } from "../../api/services/article.service";
import { Article } from "../../models/Article";
import { ArticleComponent } from "../Article/ArticleComponent";

export const Articles: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
 
  useEffect(() => {
    (async () => {
      const fetchedArticles = await articlesService.getArticles();
      setArticles(fetchedArticles!);
    })();
  }, []);

  return (
    <Grid 
      container
      spacing={5}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {articles.map(item => <ArticleComponent key={item.id} article={item} />)}

    </Grid>
  )
}