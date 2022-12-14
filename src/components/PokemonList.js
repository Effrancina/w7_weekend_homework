import Pokemon from "./Pokemon";


const PokemonList = ({pokemons, pImages}) => {
    

    return(
       
        pokemons.map((pokemon, index) => {
            return( 
                <ul>
                    <li key={index}>
                        {pokemon.name}
                        <img src={pImages[index]}></img>
                    </li>
                </ul>
                )
        })
    )
}

export default PokemonList;