import React, { useEffect, useState } from 'react';


export default function Pokemon({pokemon, index}) {
    
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(!isShown);
      
    };
  return (

  
  <div className='card'key={index}>
              {/* Names */}
                <h1> {pokemon.name} </h1>

              {/* Images */}
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                
              <button onClick = {handleClick}>More Info</button>
              {/* Show elements on click */}
              {isShown && (
                  <ul>
                    {/* Pokemon Types */}
                      <li>Type: {pokemon.types[0].type.name} </li>
                    {/* Height & Weight */}
                      <li>Height: {pokemon.height}</li>
                      <li>Weight: {pokemon.weight}</li>
                    {/* Regular Stats */}
                      <li>Regular Stat 1: {pokemon.stats[0].stat.name} </li>
                      <li>Regular Stat 2: {pokemon.stats[1].stat.name} </li>
                      <li>Regular Stat 3: {pokemon.stats[2].stat.name} </li>
                      <li>Regular Stat 4: {pokemon.stats[3].stat.name} </li>
                      <li>Regular Stat 5: {pokemon.stats[4].stat.name} </li>
                      <li>Regular Stat 6: {pokemon.stats[5].stat.name} </li>
                    {/* Base Stats */}
                      <li>Base Stat 1a: {pokemon.stats[0].base_stat} </li>
                      <li>Base Stat 1b: {pokemon.stats[1].base_stat} </li>
                      <li>Base Stat 1c: {pokemon.stats[2].base_stat} </li>
                      <li>Base Stat 1d: {pokemon.stats[3].base_stat} </li>
                      <li>Base Stat 1e: {pokemon.stats[4].base_stat} </li>
                      <li>Base Stat 1f: {pokemon.stats[5].base_stat} </li>
                  </ul>
              )}
            </div>
  )
}