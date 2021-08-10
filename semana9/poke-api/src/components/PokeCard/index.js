import React, {useState, useEffect}from "react";
import axios from "axios";

const PokeCard =() => {
  const [PokeCard,  setPokeCard] = useState (0)
  const [pokeName, setPokeName] = useState (0)
  const [pokemon, setPokemon] = useState (0)
  
  /* state = {
    // valor do estado que guarda infos e foto do pokemon
    pokemon: {} */
  

  // método que roda após a montagem do componente
 /*  componentDidMount() {
   pegaPokemon(props.pokemon); */
  useEffect(()=>{
    if (pokemon !== setPokemon) {
      pegaPokemon(setPokemon);
    }
  
  
  
  

  /* // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  componentDidUpdate(prevProps) {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  } */

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${setPokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setState({ setPokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
})

 /* 
    const pokemon = state.pokemon;
 */
    return (
      <div>
        <p>{setPokemon.name}</p>
        <p>{setPokemon.weight} Kg</p>
        {setPokemon.types && <p>{setPokemon.types[0].type.name}</p>}
        {setPokemon.sprites && (
          <img src={setPokemon.sprites.front_default} alt={setPokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;