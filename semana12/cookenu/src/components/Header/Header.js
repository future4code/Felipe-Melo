
import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';
import {StyledToolbar} from "./styled"
import {GoToRecipeList, GoToLogin} from "../../routes/coordinator"
import {useHistory} from "react-router-dom"


 function Header() {
 const history =useHistory()

  return (
   
      <AppBar position="static">
        <StyledToolbar>
         
          <Button onClick={()=> GoToRecipeList(history)} color="inherit">Cookenu</Button>
          <Button onClick={()=> GoToLogin(history)}color="inherit">Login</Button>

          <Button aria-label="delete" disabled color="primary">oii
  </Button> 

        </StyledToolbar>
      </AppBar>
  
  );
}

export default Header