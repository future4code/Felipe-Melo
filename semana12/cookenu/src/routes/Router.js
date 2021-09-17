import React from "react"
import { BrowserRouter,Switch, Route } from "react-router-dom"
import AddRecipes from "../pages/AddRecipesPage/AddRecipes"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetail from "../pages/RecipeDetailPage/RecipeDetail"
import SignUp from "../pages/SignUpPage/SignUp"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import RecipeList from "../pages/RecipeListPage/RecipeList"
import Header from "../components/Header/Header"

const Router =()=>{
    return(
     
        
        <BrowserRouter>
        <Header></Header>

        <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exatc path="/cadastro">
                    <SignUp/>
                </Route>

                <Route exact path="/">
                    <RecipeList/>
                </Route>

                <Route exact path="/adicionar-receita">
                    <AddRecipes/>
                </Route>


                <Route exact path="/detalhe:id">
                    <RecipeDetail/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

        </Switch>
        </BrowserRouter>




    )
}

export default Router