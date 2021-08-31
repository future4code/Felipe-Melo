
import React from "react"

import Router from "./Routes/Router"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router/>

    </ThemeProvider>
  );
}

export default App;
