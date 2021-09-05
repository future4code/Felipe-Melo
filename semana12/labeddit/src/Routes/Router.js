import {  Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"

import React from "react"


const Router=({rightButtonText, setRightButtonText})=>{
    return(
      
        <Switch>
                <Route exact path="/Login">
                    <LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path="/Cadastro">
                    <RegisterPage setRightButtonText={setRightButtonText} />
                </Route>

                <Route exact path="Pagina-de-feed">
                    <FeedPage></FeedPage>
                </Route>

                <Route exact path="pagina-de-post">
                    <PostPage></PostPage>
                </Route>
        </Switch>
    



    )
}

export default Router