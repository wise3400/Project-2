import React, { useEffect, useState } from 'react';


export default function Pokemon({pokemon, index, showInfo, setShowInfo}) {
    
    const [isShown, setIsShown] = useState(false);
    const [buttonText, setButtonText] = useState("More Info");

    const handleClick = event => {
    

      if(showInfo && !isShown)
      {
        return;
      }
      if(!isShown)
      {
        setButtonText("Close");
      }
      else
      {
        setButtonText("More Info");
      }
      setShowInfo(!isShown);
      setIsShown(!isShown);
      
      
    };
  return (

  
  <div className='card'key={index}>
              {/* Names */}
                <h1> {pokemon.name} </h1>

              {/* Images */}
                <img className='main-img'src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
              
              <button className='more-button' onClick = {handleClick}>{buttonText}</button>

              {/* Show elements on click */}
              {isShown && (
                 <div className='container'>
                  {/* main body of shown card */}
                  <div className='card-frame'> 
                  <div className='card-body'>
        
                      <div class='head-text'>
                        <span>
                        <p className= 'basic'>basic {pokemon.types[0].type.name} pokemon </p>
                        <h3 className='name'> {pokemon.name} </h3>
                        </span>
                        <span className='health'>{pokemon.stats[0].base_stat}{pokemon.stats[0].stat.name}</span>
                      </div>

                      <div className='img-frame'>
                        <img className='card-img' src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                      </div>

                      <div className='facts-banner'>
                        <div className='facts'>
                           Height: {pokemon.height}, Weight: {pokemon.weight}
                        </div>
                      </div>

                      <li> <b>{pokemon.stats[1].stat.name}:</b> {pokemon.stats[1].base_stat}</li>

{/*        

                      
                      
                      <li><b>Regular Stat 4:</b> {pokemon.stats[3].stat.name} </li>
                      <li><b>Regular Stat 5:</b> {pokemon.stats[4].stat.name} </li>
                      <li><b>Regular Stat 6:</b> {pokemon.stats[5].stat.name} </li>


                      
                      <li><b>Base Stat 1c:</b> {pokemon.stats[2].base_stat} </li>
                      <li><b>Base Stat 1d:</b> {pokemon.stats[3].base_stat} </li>
                      <li><b>Base Stat 1e:</b> {pokemon.stats[4].base_stat} </li>
                      <li><b>Base Stat 1f:</b> {pokemon.stats[5].base_stat} </li>
           */}

                  </div>
                  </div>
                 </div>
              )}
            </div>
  )
}