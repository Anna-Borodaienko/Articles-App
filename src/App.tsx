import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Articles } from "./components/Articles/Articles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: blue,
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Articles />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
