import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListTrips from './pages/HomePage/ListTrips/ListTrips';

import TripDetails from './pages/HomePage/TripDetails/TripDetails';
import LoginPage from './pages/HomePage/LoginPage/LoginPage';




const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

function App() {
  return (
   
  <Container> 
      <BrowserRouter>
                <Switch>
          
          
              <Route exact path={"/"}>
                <HomePage/>
                
              </Route>

              <Route exact path={"/ListTrips"}>
              <ListTrips/>
              </Route>

              <Route exact path={"/TripDetails"}>
                <TripDetails/>
              </Route>

              <Route exact path={"/LoginPage"}>
                <LoginPage/>
              </Route>


   
              </Switch>
        </BrowserRouter>
  </Container>
  );
}

export default App;
