import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import { Article as ArticleModel } from '../../models/Article';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import { DateFormat } from '../../common/enums/DateFormat';
import Highlighter from "react-highlight-words";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from './ArticleCard.module.scss';

interface Props {
  article: ArticleModel;
  highlightedWords: string[];
}

export const ArticleCard: React.FC<Props> = ({ article, highlightedWords }) => {
  const { id, title, imageUrl, description, publishedAt } = article;

  const date = moment(publishedAt).format(DateFormat.MMMM_YYYY);
  const shortTitle = title.length > 60 ? `${title.slice(0, 60)}...` : title;
  const shortDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <Grid item xs sx={{ justifyContent: "center", alignItems: "center"}}>
      <Card sx={{width: 400, height: 530, justifyContent: "center", alignItems: "center"}} className={styles.card}>
        <CardMedia 
          sx={{height: 200, width: 400}}
          image={imageUrl}
        />

        <CardContent>
          <Typography gutterBottom variant="body2" sx={{height: 30, opacity: 0.8}}>
            <CalendarTodayIcon sx={{fontSize: 'small', mr: 1}}/>
            {date}
          </Typography>

          <Typography gutterBottom variant="subtitle1" sx={{height: 100}}>
            <Highlighter
              searchWords={highlightedWords}
              textToHighlight={shortTitle}
              autoEscape={true}
              />
          </Typography>

          <Typography gutterBottom variant="body1" sx={{height: 100}}>
          <Highlighter
              searchWords={highlightedWords}
              textToHighlight={shortDescription}
              autoEscape={true}
              />
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/${id}`} style={styles.link}>
            <Button size="small" startIcon={<ArrowForwardIcon fontSize='small' />}>
              Read more
            </Button>
          </Link>
      </CardActions>
      </Card>
    </Grid>
    
  )
}