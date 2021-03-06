import React, { useEffect } from "react"
import {Button} from "@material-ui/core"
import { ScreenContainer, InputsContainer } from "./Styled"
import TextField  from "@material-ui/core/TextField"
import useForm from "../../hooks/useForms"
import { useHistory } from "react-router-dom"
import {goToRegisterPage} from "../../Routes/coordinator"
import { login } from "../../Services/Services/users"
/* import useUnProtectPage from "../../hooks/useUnprotectPage" */
import useState from "axios"


    const LoginPage=({rightButtonText, setRightButtonText})=>{
        /* useUnProtectPage() */
        

        const [form, onChange, clear] =useForm({email:"",password:""})
        const history =useHistory()

        const onSubmitForm =(event)=>{
            event.preventDefault()
            login(form, clear, history, setRightButtonText)
        }

      /*   useEffect(()=>{
            if(localStorage.getItem('token')!== null){
                history.push("/feed")
            }
        },[])  */   



            return(
        <ScreenContainer>
            <h1>Pagina de Login</h1>
        <InputsContainer>
        
        <form onSubmit={onSubmitForm}>
                <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"dense"}
                required
                type={"email"}
                />


                <TextField
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"}
                fullWidth
                margin={"dense"}
                required
                type={"password"}
                />


            <Button 
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            >
                Fazer Login
            </Button>

            <Button
            onClick={()=> goToRegisterPage(history)}
            type={"submit"}
            fullWidth
            variant={"text"}
            >
                N??o possui conta? Cadastre-se
            </Button>

        </form>


        </InputsContainer>
        </ScreenContainer>
        )
    }

    export default LoginPage