import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button';
import { goToLogin } from '../../Routes/coordinator';
import { useHistory } from "react-router-dom"

function Header({rightButtonText, setRightButtonText}) {
  const token = localStorage.getItem("token")
  const history =useHistory()

  const logout =()=>{
    localStorage.removeItem("token")
  }

  const rightButtonAction =()=>{
    if(token){
      logout()
      setRightButtonText("login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
 
   return (
    
       <AppBar position="static">
         <StyledToolbar>
          
           <Button  color="inherit">LabEddit</Button>
           <Button onClick={rightButtonAction}color="inherit">{rightButtonText}</Button>    
         </StyledToolbar>
       </AppBar>
   
   );
 }
 
 export default Header

