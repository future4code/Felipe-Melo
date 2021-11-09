import { connection } from "./connection";
import pokemonGo from "./PokemonGo.json"

const main = async ()=>{

    try{
        await connection.raw(`
        CREATE TABLE  IF NOT EXISTS pokemonGo(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            pokedex VARCHAR(255),
            Img VARCHAR(255),
            generation VARCHAR(255),
            evolution VARCHAR(255),
            evolved VARCHAR(255),
            family VARCHAR(255),
            cros VARCHAR(255),
            type1 VARCHAR(255),
            type2 VARCHAR(255),
            weather VARCHAR(255),
            weather2 VARCHAR(255),
            stat VARCHAR(255),
            atk VARCHAR(255),
            def VARCHAR(255),
            sta VARCHAR(255),
            legendary VARCHAR(255),
            aquiareable VARCHAR(255),
            spawns VARCHAR(255),
            Regional VARCHAR(255),
            Raidabl VARCHAR(255),
            Hatchale VARCHAR(255),
            Shiny VARCHAR(255),
            Nest VARCHAR(255),
            New VARCHAR(255),
            Gettable VARCHAR(255),
            Future  VARCHAR(255),
            life  VARCHAR(255),
            life2 VARCHAR(255)
            );

        )
        `)
            console.log("tabela  criada")

           pokemonGo.forEach((pokemonGo:any) => {
                pokemonGo.tags=pokemonGo.tags[0]
            });

            await connection("pokemonGo").insert(pokemonsGo.map(()=>{

            })

    }catch(error){
        console.log(error)
    }finally{
        connection.destroy()
    }
}