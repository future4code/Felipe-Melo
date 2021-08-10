import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const  App = () => {
    const [pokeList, setPokeList] = useState (0)
    const [PokeName, setPokeName] = useState (0)

  

    useEffect(() =>{
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setState({ setPokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  })
}
 

  const changePokeName = (event) => {
    setState({ setPokeName: event.target.value });
  
  



    
/* 
  // método que roda após a montagem do componente
  componentDidMount = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        this.setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePokeName = event => {
    this.setState({ pokeName: event.target.value });
  }; */

  
    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {setPokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {setPokeName && <PokeCard pokemon={setPokeName} />}
      </div>
    );
  }


export default App;