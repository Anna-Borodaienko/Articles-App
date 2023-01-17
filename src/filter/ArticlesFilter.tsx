import React from 'react';
import debounce from 'lodash.debounce';

import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  setFilter: (input: string) => void;
}

export const ArticlesFilter: React.FC<Props> = ({ setFilter }) => {
  const debouncedSetFilter = debounce(setFilter, 500);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetFilter(event.currentTarget.value);
  };

  return (
    <>
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <TextField id="outlined-search" label="Search article" type="search" onChange={onChange} />
    </>
  );
};
