import React from "react"
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import useForm from "../../hooks/useForms"
import { useHistory } from "react-router-dom"
import { General } from "./styled"
import { BASE_URL } from "../../constants/urls"
/* import useUnProtectPage from "../../hooks/useUnprotectPage"
 */




const RegisterPage =({setRightButtonText})=>{
   /*  useUnProtectPage() */


    const [form, onChange, clear] =useForm({email:"",password:""})
    const history =useHistory()



    const onSubmitForm =(event)=>{
        event.preventDefault()
        RegisterPage(form, clear, history, setRightButtonText)
    }
    
     const body={
        email:email,
        password: password,
        username: username
    }
    

    const response = axios.post(`${BASE_URL}/users/signup `, body)


 








    return(
        <form onSubmit={onSubmitForm}>
<General>
       <TextField
        name={"nome"}
        value={form.name}
        onChange={onChange}
        label={"Nome"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        type={"text"}
        />


        <TextField
        name={"email"}
        value={form.email}
        onChange={onChange}
        label={"Insira seu email"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        type={"text"}
        />
      <TextField
        name={"password"}
        value={form.password}
        onChange={onChange}
        label={"Senha"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        type={"password"}
        />


    <Button 
    type={"submit"}
    fullWidth
    variant={"contained"}
    color={"primary"}
   
    >
        Cadastrar
    </Button>

    </General>

    {/* <Button
    onClick={()=> goToRegisterPage(history)}
    type={"submit"}
    fullWidth
    variant={"text"}
    >
        Não possui conta? Cadastre-se
    </Button> */}

</form>

    )
}


export default RegisterPage