import { Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { articlesService } from "../../api/services/ArticleService";
import { Article as ArticleModel} from "../../models/Article";
import { Article } from "../Article/Article";
import { SearchField } from "../SearchField/SearchField";

export const Articles: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [articles, setArticles] = useState<ArticleModel[]>([]);
 
  useEffect(() => {
    (async () => {
      const fetchedArticles = await articlesService.getArticles(filter, filter);
      setArticles(fetchedArticles);
    })();
  }, [filter]);

  console.log(filter);
  

  return (
    <>
      <SearchField setFilter={setFilter} />
      <Grid 
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {articles.map(item => <Article key={item.id} article={item} highlightedWord={filter}/>)}
      </Grid>
    </>
    
  )
}