import React, {useState, useEffect} from "react";
import Title from "../components/Title";
import PokemonList from "../components/PokemonList";



const PokemonBox = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [pImages, setpImages] = useState([])
    const [randomPokemon, setRandomPokemon] = useState(null);

    useEffect(() => {
        getPokemon();
        fetchImages();
      }, [])

    const getPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(res => res.json())
        // .then(data => {console.log(data); return data})
        .then(pokemons => setPokemons(pokemons.results))
        .catch(error => console.error(error))
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(res => res.json())
        // .then(data => {console.log(data); return data})
        .then(pokemons => setpImages(pokemons.results.url))
        .catch(error => console.error(error))
        // fetchImages()
        // let imageLibrary = []
        // let urlArray = pokemons.map((row) => {
        //     return(
        //         row.url

        //     )
        // })
        // setpImages(urlArray)
        // console.log(urlArray)
    }
    
  
    const fetchImages = function () {
        // let imageLibrary = []
        // let urlArray = pokemons.map((row) => {
        //     return(
        //         row.url

        //     )
        // })
        // console.log(urlArray)
        // for (let url of Array(pokemons['url'])) {
        //     console.log(url)
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(poke => poke['sprites']['front_default'])
        //     .then(pokeImg => imageLibrary.push(pokeImg))
        // }
        // setpImages(imageLibrary)
        // console.log(pImages)

    } 
   

    const handleRandomPokemon = () => {
        setPokemon(pokemons[Math.floor(Math.random() * pokemons.length)])
        // console.log(generateRandomPokemon)
    }
    console.log(pokemons);

    return(
        <>
        <Title />
        {pokemons ? <PokemonList 
        pokemons={pokemons}
        /> : null }
        <button onClick={handleRandomPokemon}>Get me a pokemon</button>
        </>
    )
}
export default PokemonBox;