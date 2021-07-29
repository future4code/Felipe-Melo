import React from 'react'
import axios from 'axios'
import './App.css';

export default class App extends React.Component() {
  state = {
    activity: {}
  }
  getActivity =() =>{
    axios
    .get("https://www.boredapi.com/api/activity/")
    
    .then((res) =>{
      console.log(res.data)
      this.setState({activity:res.data})

    }).catch((err) =>{
      console.log(err)
    })
  }
  
  render(){  
const{activity, type, participants, price} = this.state.activity

return (
<div>
<h1>esta entendiado?</h1>
<button onClick={this.activity}>clique aqui</button>
<h3>atividades</h3>
<p>nome:{this.state.activity.activity}</p>
<p>tipo:{this.state.activity.type}</p>
<p>participações {participants}</p>
<p>preço {price}</p>
</div>


)
   
  
}
}


