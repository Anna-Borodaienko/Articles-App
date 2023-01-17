/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import { Article as ArticleModel } from '../../models/Article';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import { DateFormat } from '../../common/enums/DateFormat';
import Highlighter from 'react-highlight-words';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from './ArticleCard.module.scss';

interface Props {
  article: ArticleModel;
  highlightedWords: string[];
}

export const ArticleCard: React.FC<Props> = ({ article, highlightedWords }) => {
  const { id, title, imageUrl, description, publishedAt } = article;

  const date = moment(publishedAt).format(DateFormat.MMMM_YYYY);
  const shortTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;
  const shortDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <Grid item xs="auto">
      <Card
        raised
        sx={{
          width: 400,
          height: 530,
        }}
        className={styles.card}
      >
        <CardActionArea>
          <Link to={`/${id}`} className={styles.link}>
            <CardMedia component="img" sx={{ height: 200, width: 400 }} image={imageUrl} />

            <CardContent>
              <Typography paragraph gutterBottom sx={{ height: 30, opacity: 0.8, fontSize: 14 }}>
                <CalendarTodayIcon sx={{ fontSize: 'small', mr: 1 }} />
                {date}
              </Typography>

              <Typography paragraph gutterBottom sx={{ height: 80, fontSize: 22 }}>
                <Highlighter
                  searchWords={highlightedWords}
                  textToHighlight={shortTitle}
                  autoEscape={true}
                />
              </Typography>

              <Typography paragraph gutterBottom sx={{ height: 100, fontSize: 16 }}>
                <Highlighter
                  searchWords={highlightedWords}
                  textToHighlight={shortDescription}
                  autoEscape={true}
                />
              </Typography>
            </CardContent>

            <Typography paragraph>
              <ArrowForwardIcon sx={{ fontSize: 'medium', mr: 1, ml: 1 }} />
              Read more
            </Typography>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
