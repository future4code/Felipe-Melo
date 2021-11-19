import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'



const Home = () => {

    const [loterias, setLoterias] = useState([])
    const [megasena,setMegasena]= useState([])


       
    const getLoterias =()=>{
            
            axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/Loterias')
              
            .then((res)=> {               
                console.log(res.data.list);
              })
              .catch( (error)=> {               
                console.log(error.response.data);
              })
            {
        }
        
        useEffect(() => {
          getLoterias()
          return () => {
           
          }
        }, [])
  

    return (
        <div>
       
        <h1>Mega Sena</h1>
     <button onclick={getLoterias}>Sortear</button>

           
        </div>

    )
}
    

export default Home
