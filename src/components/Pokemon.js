import React from "react"

const Pokemon = ({pName}) => {
    const altTag = `${pName}`;
    


    return(
        
        <div ClassName='pokemon'>

            <div ClassName='details'> 
                
                <h3>I'm a single Pokemon!</h3>
                {pName}
            </div>
            
    
        </div>
    
    )
}

export default Pokemon;