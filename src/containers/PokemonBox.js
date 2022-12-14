import React, {useState, useEffect} from "react";
import Title from "../components/Title";
import PokemonList from "../components/PokemonList";
import PokemonGenerator from "../components/PokemonGenerator";




const PokemonBox = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState(null)
    const [pImages, setpImages] = useState([])
    const [pData, setpData] = useState([])
    // const [randomPokemon, setRandomPokemon] = useState(null);

    useEffect(() => {
        getPokemon();
        // fetchImages();
      }, [])
    
    
    const getPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(res => res.json())
        .then(pokemons => {
            setPokemons(pokemons.results);
            const pokes = pokemons.results;
            const pokemonPromise = pokes.map((element) => {
                return fetch(element.url).then(res => res.json())
            })
            Promise.all(pokemonPromise)
            .then(data => {
                console.log(data)
                setpData(data);
                setpImages(data.map((element) => {
                   return element.sprites.other["dream_world"]["front_default"]
                }))
            })
        })
        .catch(error => console.error(error))
    }
   

    const handleRandomPokemon = () => {
        setPokemon(pokemons[Math.floor(Math.random() * pokemons.length)])
        console.log(pokemon.element.sprites.other["dream_world"]["front_default"])
    }
    // console.log(pokemons);

    return(
        <>
        <Title />
        <button onClick={handleRandomPokemon}>Get me a pokemon</button>
        {pokemon ? <PokemonGenerator pokemon={pokemon}/> : null }
        {pokemons ? <PokemonList 
        pokemons={pokemons} pImages={pImages}
        /> : null }
        </>
    )
}
export default PokemonBox;