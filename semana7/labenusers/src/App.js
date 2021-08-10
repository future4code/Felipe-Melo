import React from 'react'
import TelaCadastro from"./components/TelaCadastro"
import TelaListaUsuario from './components/TelaListaUsuario'
import axios from'axios'

export default class App extends React.Component {
    state ={
      TelaAtual:"cadastro"
    }


escolheTela =() =>{
    switch(this.state.telaAtual){
      case "cadastro":
          return <TelaCadastro irParaLista={this.irParaLista}/>
      case"Lista":
          return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
      default:
          return<div>Erro: página não encontrada</div>
    }

}
irParaCadastro =()=> {
    this.setState({TelaAtual:"cadastro"})
}
irParaLista =()=> {
    this.setState({TelaAtual:"Lista"})
}
  
fazerCadastro =() =>{
  const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const body ={
   name:"this.state.nome",
    email:"this.state.email"
  }

}

axios.post(url, body,{
  headers:{
    Authorization: "felipe-vieira"
  }
})
.then((res) =>{

})
.catch((res) =>{

})


  render (){
    return (
      <div>
           {this.escolheTela()}



      </div>
    )
  }
}

