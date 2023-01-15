import { IconButton, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';

interface Props {
  setFilter: (input: string) => void;
}

export const SearchField: React.FC<Props> = ({ setFilter }) => {
  const debouncedSetFilter = debounce(setFilter, 500);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetFilter(event.currentTarget.value);
  }

  return (
    <>
      <div>
        Filter by keywords
      </div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, height: 50, mt: 2, mb: 4 }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <TextField
          id="search"
          label="Search article"
          type="search"
          onChange={onChange}
        />
      </Paper>
    </>
  )
}