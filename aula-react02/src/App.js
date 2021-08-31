import logo from './logo.svg';
import './App.css';

function meuComponente () {
  return (
   
      <div>
   
      <h2>Meu titulo </h2>
      <p>Etou conseguindo :))</p>

    
      </div>
      
  );
}

export default function App () {
  return (
  <div><meuComponente></meuComponente></div>
  <meuComponente></meuComponente>
  )
}
