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
              
              <button className='more-button' onClick = {handleClick}>More Info</button>

              {/* Show elements on click */}
              {isShown && (
                 <div className='full-card'>
                   <ul>
                    {/* Pokemon Types */}
                      <li><b>Type:</b> {pokemon.types[0].type.name} </li>
                    {/* Height & Weight */}
                      <li><b>Height:</b> {pokemon.height}</li>
                      <li><b>Weight:</b> {pokemon.weight}</li>
                    {/* Regular Stats */}
                      <li><b>Regular Stat 1:</b> {pokemon.stats[0].stat.name} </li>
                      <li><b>Regular Stat 2:</b> {pokemon.stats[1].stat.name} </li>
                      <li><b>Regular Stat 3:</b> {pokemon.stats[2].stat.name} </li>
                      <li><b>Regular Stat 4:</b> {pokemon.stats[3].stat.name} </li>
                      <li><b>Regular Stat 5:</b> {pokemon.stats[4].stat.name} </li>
                      <li><b>Regular Stat 6:</b> {pokemon.stats[5].stat.name} </li>
                    {/* Base Stats */}
                      <li><b>Base Stat 1a:</b> {pokemon.stats[0].base_stat} </li>
                      <li><b>Base Stat 1b:</b> {pokemon.stats[1].base_stat} </li>
                      <li><b>Base Stat 1c:</b> {pokemon.stats[2].base_stat} </li>
                      <li><b>Base Stat 1d:</b> {pokemon.stats[3].base_stat} </li>
                      <li><b>Base Stat 1e:</b> {pokemon.stats[4].base_stat} </li>
                      <li><b>Base Stat 1f:</b> {pokemon.stats[5].base_stat} </li>
                  </ul>
                 </div>
              )}
            </div>
  )
}