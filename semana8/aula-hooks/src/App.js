import logo from './logo.svg';
import './App.css';
import React, { useState} from "react"

 export default function App() {
  const [fullName, setFullName] = useState("")

  const changeFullName = (event) =>{
    setFullName(event.target.value)
  }
  
  return (
    <div>
      <input name="fullName" value={fullName} onChange={setFullName} id="input-fullName"></input>

     <h1>user</h1>
     <h2>{fullName}</h2>
    </div>
  );
}


