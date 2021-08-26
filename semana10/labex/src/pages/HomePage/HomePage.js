
import {Form} from "../HomePage/styled"
import {useHistory} from "react-router-dom"


function HomePage(){
    const history = useHistory()
    

    const goToListTrips =() =>{
        history.push("/ListTrips")

    }
    const goToLoginPage =()=>{
        history.push("/LoginPage")
    }

    return(
        <Form>
            <h1>LabeX</h1>
          


            <button onClick={goToListTrips}> Viagens</button>
            <button onClick={goToLoginPage}>Entrar</button>
        </Form>
    )
}

export default HomePage