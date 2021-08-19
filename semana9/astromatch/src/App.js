

import axios from "axios"
import React, { useState } from "react"
 import  HomePage  from "./components/pages/HomePage/HomePage" 
 import  MatchsPage  from "./components/pages/MatchsPage/MatchsPage"



const App = () => {
  const [currentPage, setCurrentPage] = useState("home")


  const changePage = () => {
    if (currentPage === "home"){
      setCurrentPage("matches")
    } else {
      setCurrentPage("home")
    }
  }
    const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-vieira-lovelace/clear"
  const cleanMatches = () => {
   axios.pull(url)
   .then(() =>{
     alert("limpeza concluida")
   })
   .catch((error)=>{
     console.log(error.response )
   })
  }

  return (
    <div>
      {currentPage === "home" ?  <HomePage /> :  <MatchsPage />}
      <button onClick={changePage}>{currentPage === "home" ? "Ir para Matches" : "Ir para Home"}</button>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
  )
}

export default App
