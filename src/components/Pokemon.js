import React from "react"

const Pokemon = ({pName, image}) => {
    const altTag = `${pName}`;
    


    return(
        
        <div ClassName='pokemon'>
            <img
            src={image}
            alt={altTag}
            />

            <div ClassName='details'> 
                
                <h3>I'm a single Pokemon!</h3>
                {pName}
            </div>
            
    
        </div>
    
    )
}

export default Pokemon;