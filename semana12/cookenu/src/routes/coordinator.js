export const GoToLogin =(history)=>{
    history.push("/login")
}

export const GoToSignUp =(history)=>{
    history.push("/cadastro")
}

export const GoToAddRecipes =(history)=>{
    history.push("/adicionar-receita")
}

export const GoToRecipeList =(history)=>{
    history.push("/")
}

export const GoToRecibeDetail =(history, id)=>{
    history.push("/detalhes/${id}")
}
