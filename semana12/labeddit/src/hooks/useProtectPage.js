/* import { useEffect } from "react"
import { goToLogin } from "../Routes/coordinator"
import { useHistory } from "react-router-dom"





const useProtectPage =()=>{
    const history=useHistory()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            goToLogin(history)
        }
    },[history])

}

export default useProtectPage */