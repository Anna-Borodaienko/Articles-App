import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Article as ArticleModel } from '../../models/Article';
import Typography from '@mui/material/Typography';

interface IProps {
  article: ArticleModel;
}

export const ArticleComponent: React.FC<IProps> = ({ article }) => {
  const { title, imageUrl, description, publishedAt } = article;

  return (
    <Grid item xs>
      <Card sx={{width: 400, height: 530}}>
        <CardMedia 
          sx={{height: 200, width: 400}}
          image={imageUrl}
        />

        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {publishedAt.slice(0, 10)}
          </Typography>

          <Typography gutterBottom variant="subtitle1">
            {title}
          </Typography>

          <Typography gutterBottom variant="subtitle1">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    
  )
}
