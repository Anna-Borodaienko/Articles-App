import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Articles } from "./components/Articles/Articles";
import { blue } from "@mui/material/colors";
import { FullInfo } from './components/FullInfo/FullInfo';

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
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/:id' element={<FullInfo />} />
        </Routes>
        
      </ThemeProvider>
      
    </div>
  );
}

export default App;
