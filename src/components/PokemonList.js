import Pokemon from "./Pokemon";


const PokemonList = ({pokemons}) => {
    
    

    return(
       
        pokemons.map((pokemon, index) => {
            return( 
                <div key={index}>{pokemon.name}</div>)
        })
    )
}

export default PokemonList;