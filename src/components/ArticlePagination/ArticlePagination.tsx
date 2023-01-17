/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

interface Props {
  page: number;
  pageCount: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const ArticlePagination: React.FC<Props> = ({ page, pageCount, handlePageChange }) => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}>
      <Stack direction="row" spacing={4}>
        <Pagination
          count={pageCount}
          showFirstButton
          showLastButton
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
};
