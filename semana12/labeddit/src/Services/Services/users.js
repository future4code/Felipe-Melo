import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { goToFeedPage } from "../../Routes/coordinator"



 export const login =(form, clear, history)=>{
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
    })
    .catch((err)=> alert("erro"))
}

