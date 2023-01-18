/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesService } from '../../api/services/ArticleService';
import Typography from '@mui/material/Typography';
import { Article as ArticleModel } from '../../models/Article';
import { Button, Card, CardActions, CardContent, CardMedia, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './ArticlePage.module.scss';
import { Loader } from '../Loader/Loader';

export const ArticlePage: React.FC = () => {
  const [selectedArticle, setArticle] = useState<ArticleModel | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const fetchedArticle = await articlesService.getById(+id!);
      setArticle(fetchedArticle);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <Card sx={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: 245 }}
        image={selectedArticle?.imageUrl}
        alt="Photo"
      />
      <Container
        className={styles.container}
        sx={{ backgroundColor: 'white', minHeight: '70vh', minWidth: '90vw' }}
      >
        {isLoading && <Loader />}
        <CardContent className={styles.content}>
          <Typography gutterBottom sx={{ fontSize: 28, textAlign: 'center', mt: 5 }}>
            {selectedArticle?.title}
          </Typography>

          <Typography gutterBottom sx={{ fontSize: 20, mt: 10 }}>
            {selectedArticle?.description}
          </Typography>
        </CardContent>
      </Container>

      <CardActions>
        <Link to={'/'} className={styles.link}>
          <Button size="small">
            <ArrowBackIcon fontSize="small" />
            Back
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
