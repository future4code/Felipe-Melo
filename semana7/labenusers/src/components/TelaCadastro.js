import React from "react"

export default class TelaCadastro extends React.Component{
        state = {
            nome:"",
            email:""
        }

        handleNome = (e) =>{
            this.setState({nome: e.target.value})
        }

        handleEmail = (e) =>{
            this.setState({email: e.target.value})
        }


        fazerCadastro =()=>{
            console.log()
        }





    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de usuarios</button>
                
                <h2>Cadastro</h2>
                <input 
                placeholder={"nome"}
                value={this.state.name}
                onChange={this.handleNome}/>

                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}/>

            </div>        )
    }
}