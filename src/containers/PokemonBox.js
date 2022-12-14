import React, {useState, useEffect} from "react";
import Title from "../components/Title";
import PokemonList from "../components/PokemonList";
import PokemonGenerator from "../components/PokemonGenerator";




const PokemonBox = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState(null)
    const [pImages, setpImages] = useState([])
    const [pImage, setpImage] = useState(null)
    const [pData, setpData] = useState([])
    // const [randomPokemon, setRandomPokemon] = useState(null);


    useEffect(() => {
        getPokemon();

      }, [])
    
    
    const getPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=152')
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
        const randNumber = Math.floor(Math.random() * pokemons.length)
        setPokemon(pokemons[randNumber])
        setpImage(pImages[randNumber])
    }
    

    return(
        <>
        <Title />
        <button onClick={handleRandomPokemon}>Get me a pokemon</button>
        {pokemon ? <PokemonGenerator pokemon={pokemon} pImage={pImage}/> : null }
        {pokemons ? <PokemonList 
        pokemons={pokemons} pImages={pImages}
        /> : null }
        </>
    )
}
export default PokemonBox;