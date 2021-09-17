
import React,{useState} from "react"

import Router from "./Routes/Router"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/Header/Header";

function App() {
  const token = localStorage.getItem("token")
  const[rightButtonText, setRightButtonText] = useState(token ?"logout" :"login")

  return (
    <ThemeProvider theme={theme}>
   <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
     <Router  rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
</BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
