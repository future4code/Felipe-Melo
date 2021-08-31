import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import Header  from "../pages/Header/Header"
import React from "react"


const Router=()=>{
    return(
        <BrowserRouter>
        <Header></Header>
        <Switch>
            
                <Route exact path="/Login">
                    <LoginPage></LoginPage>
                </Route>

                <Route exact path="/Cadastro">
                    <RegisterPage></RegisterPage>
                </Route>

                <Route exact path="Pagina-de-feed">
                    <FeedPage></FeedPage>
                </Route>

                <Route exact path="pagina-de-post">
                    <PostPage></PostPage>
                </Route>






        </Switch>
        </BrowserRouter>



    )
}

export default Router