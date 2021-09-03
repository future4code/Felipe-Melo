import React from "react"
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import useForm from "../../hooks/useForms"
import { useHistory } from "react-router-dom"
import { General } from "./styled"
/* import useUnProtectPage from "../../hooks/useUnprotectPage"
 */




const RegisterPage =()=>{
   /*  useUnProtectPage() */


    const [form, onChange, clear] =useForm({email:"",password:""})
    const history =useHistory()



    const onSubmitForm =(event)=>{
        event.preventDefault()
    }




    return(
        <form onSubmit={onSubmitForm}>
<General>
       <TextField
        name={"nome"}
        value={form.email}
        onChange={onChange}
        label={"Nome"}
        variant={"outlined"}
        fullWidth
        margin={"normal"}
        required
        type={"Nome"}
        />


        <TextField
        name={"email"}
        value={form.password}
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
-

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