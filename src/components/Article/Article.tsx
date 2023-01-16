import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import { Article as ArticleModel } from '../../models/Article';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import { DateFormat } from '../../common/enums/DateFormat';
import Highlighter from "react-highlight-words";

interface Props {
  article: ArticleModel;
  highlightedWord: string;
}

export const Article: React.FC<Props> = ({ article, highlightedWord }) => {
  const { id, title, imageUrl, description, publishedAt } = article;

  const date = moment(publishedAt).format(DateFormat.MMMM_YYYY);
  const shortDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <Grid item xs>
      <Card sx={{width: 400, height: 530}}>
        <CardMedia 
          sx={{height: 200, width: 400}}
          image={imageUrl}
        />

        <CardContent>
          <Typography gutterBottom component='div' variant="body2" sx={{height: 30, opacity: 0.8}}>
            {date}
          </Typography>

          <Typography gutterBottom component='div' variant="subtitle1" sx={{height: 60}}>
            <Highlighter
              searchWords={highlightedWord.split(' ')}
              textToHighlight={title}
              autoEscape
              />
          </Typography>

          <Typography gutterBottom component='div' variant="body2" sx={{height: 150}}>
          <Highlighter
              searchWords={highlightedWord.split(' ')}
              textToHighlight={shortDescription}
              autoEscape
              />
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/${id}`} >
            <Button size="small" component='div'>
              Read more
              <ArrowForwardIcon fontSize='small' />
            </Button>
          </Link>
      </CardActions>
      </Card>
    </Grid>
    
  )
}
