/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
    <Card sx={{ minHeight: '90vh' }}>
      <CardMedia
        component="img"
        sx={{ height: 245 }}
        image={selectedArticle?.imageUrl}
        alt="Photo"
      />
      <Container className={styles.container}>
        {isLoading && <Loader />}
        <CardContent className={styles.content}>
          <Typography gutterBottom sx={{ height: 80, fontSize: 24, textAlign: 'center' }}>
            {selectedArticle?.title}
          </Typography>

          <Typography gutterBottom sx={{ height: 240, fontSize: 16 }}>
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
