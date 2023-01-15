import { IconButton, InputBase } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';

export const SearchField: React.FC = () => {
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

        <InputBase
          autoFocus
        />
      </Paper>
    </>
  )
}