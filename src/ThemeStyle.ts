import { createTheme } from '@mui/material';
import { Colors } from './common/enums/Colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.MAIN,
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
});
