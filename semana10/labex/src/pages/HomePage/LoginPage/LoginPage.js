import axios from "axios"
import{List} from "./styled"
import {useStates} from "usestates"



function LoginPage(){
  
    
    
    const onChangPassword =(event)=>{
        setPassword(event.target.value)
    }
    
    const onSubmitLogin= ()=>{
        console.log(email, password)
        const body ={
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login'
        )
        .then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error.response)
        })
    }
    
  
   
   
   
    return(
       <div>
                <input
                placeholder="email"
                type="email"
                value={onChangemail}
                onChange={onChangeEmail}                
                
                ></input>




       </div>
    )

    }

export default LoginPage