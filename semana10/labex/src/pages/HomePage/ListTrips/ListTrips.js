import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import {General} from './styled'
import {List1, List2, List3} from './styled'

function ListTrips(){

    const history = useHistory()
    
    
    const goToTripDetails =()=>{
    history.push("/TripDetails")
    
    }
    const callBack =()=>{
        history.callBack()
    }



    return (
        <General>
            <List1>
                <h2>Viagem</h2>
                <p>Nome:</p>
                <p>Planeta:</p>
                <p>Data:</p>
                <p>Descrição</p>
                <p>Duração da Viagem:</p>

                <button onClick={goToTripDetails}>Ver Detalhes da viagem</button>
                <button onClick={useCallback}>Voltar</button>
            </List1>
               
            <List2>
                <h2>Viagem</h2>
                <p>Nome:</p>
                <p>Planeta:</p>  import useForm from "./pages/useForms/useForms"
                <p>Data:</p>
                <p>Descrição</p>
                <p>Duração da Viagem:</p>
                
                <button onClick={goToTripDetails}>Ver Detalhes da viagem</button>
                <button onClick={useCallback}>Voltar</button>
            </List2>
                
                
            <List3>
                <h2>Viagem</h2>
                <p>Nome:</p>
                <p>Planeta:</p>
                <p>Data:</p>
                <p>Descrição</p>
                <p>Duração da Viagem:</p>

                <button onClick={goToTripDetails}>Ver Detalhes da viagem</button>
                <button onClick={useCallback}>Voltar</button>
            </List3>

         
        </General>
        

    )
}


export default ListTrips