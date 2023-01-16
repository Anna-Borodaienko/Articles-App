import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesService } from '../../api/services/ArticleService';
import Typography from '@mui/material/Typography';
import { Article as ArticleModel} from "../../models/Article";
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const FullInfo: React.FC = () => {
  const [selectedArticle, setArticle] = useState<ArticleModel | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const fetchedArticle = await articlesService.getById(+id!);

      setArticle(fetchedArticle);
    })();
  }, []);

  return (
    <Card sx={{minHeight: '90vh'}}>
        <CardMedia 
          component="img"
          sx={{height: 245}}
          image={selectedArticle?.imageUrl}
          alt='Photo'
        />

        <CardContent>

          <Typography gutterBottom component='div' variant="subtitle1" sx={{height: 60}}>
            {selectedArticle?.title}
          </Typography>

          <Typography gutterBottom component='div' variant="body2">
            {selectedArticle?.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/`} >
            <Button size="small" component='div'>
              <ArrowBackIcon fontSize='small' />
              Back
            </Button>
          </Link>
      </CardActions>
      </Card>
  )
}