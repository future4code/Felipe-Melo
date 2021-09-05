import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { goToFeedPage, goToPostPage } from "../../Routes/coordinator"



 export const login =(form, clear, history, setRightButtonText)=>{
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
        setRightButtonText("logout")
    })
    .catch((err)=> alert("erro"))
}


export const signUp =(body, clear, history, setRightButtonText) =>{
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostPage(history)
        setRightButtonText("logout")
    })
    .catch((err)=>
    alert(err.response.data.message)
    )

}
