import { useEffect } from "react"
import { goToFeedPage, } from "../Routes/coordinator"
import { useHistory } from "react-router-dom"




const useUnProtectPage =()=>{
    const history=useHistory()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            goToFeedPage(history)
        }
    },[history])

}

export default useUnProtectPage