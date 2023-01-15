import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import { Article as ArticleModel } from '../../models/Article';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import { DateFormat } from '../../common/enums/DateFormat';

interface Props {
  article: ArticleModel;
}

export const Article: React.FC<Props> = ({ article }) => {
  const { title, imageUrl, description, publishedAt } = article;

  const date = moment(publishedAt).format(DateFormat.MMMM_YYYY);
  const shortDescription = description.slice(0, 100);

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
            {title}
          </Typography>

          <Typography gutterBottom component='div' variant="body2" sx={{height: 150}}>
            {shortDescription}
          </Typography>
        </CardContent>

        <CardActions>
        <Button size="small" component='div'>
          Read more
          <ArrowForwardIcon fontSize='small' />
        </Button>
        
      </CardActions>
      </Card>
    </Grid>
    
  )
}
