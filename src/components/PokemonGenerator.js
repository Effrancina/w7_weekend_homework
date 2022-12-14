const PokemonGenerator = ({pokemon, pImage}) => {

    

    return(
        <>
        <p>{pokemon.name}</p>
        <img src={pImage} />
        </>

    )


}

export default PokemonGenerator;