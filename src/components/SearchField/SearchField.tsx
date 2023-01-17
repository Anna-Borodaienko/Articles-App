import React from 'react';
import { IconButton, InputBase, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';

interface Props {
  setFilter: (input: string) => void;
}

export const SearchField: React.FC<Props> = ({ setFilter }) => {
  const debouncedSetFilter = debounce(setFilter, 500);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    debouncedSetFilter(event.currentTarget.value);
  };

  return (
    <>
      <Typography variant="subtitle1">Filter by keywords</Typography>

      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 600,
          height: 50,
          mt: 2,
          mb: 4,
        }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <InputBase id="standard-basic" fullWidth onChange={onChange} />
      </Paper>
    </>
  );
};
