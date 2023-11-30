import React, { useEffect, useState } from 'react';

// https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/
// https://www.geeksforgeeks.org/react-js-pokemon-app/
// https://pokeapi.co/

export default function Pokemon() {
  const [thePokemons, setPokemons] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(true);
  };
  
  // CHAT GPT used here for debugging
  useEffect(() => {
    const getPokemon = async () => 
    {
      try 
      {
        const fetchAPI1 = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data1 = await fetchAPI1.json();
        const pokemonList = data1.results;

        const getPokemon2 = pokemonList.map(async (pokemon) => 
        {
          const fetchAPI2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data2 = await fetchAPI2.json();
          return data2;
        });

        const pokemonDescription = await Promise.all(getPokemon2);
        setPokemons(pokemonDescription);
      } 
      
      catch (error) 
      {
        console.error('404 Error', error);
      }
    };

    getPokemon();
  }, []);

  return (

      <div className='flex-parent'>
        {thePokemons.map((pokemon, index) => (
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
                </ul>
            )}
          </div>
        ))}
      </div>
       
  );
}

// {/* Regular Stats */}
// <ul>
// <li>Regular Stat 1: {pokemon.stats[0].stat.name} </li>
// </ul>

// <ul>
// <li>Regular Stat 2: {pokemon.stats[1].stat.name} </li>
// </ul>

// <ul>
// <li>Regular Stat 3: {pokemon.stats[2].stat.name} </li>
// </ul>

// <ul>
// <li>Regular Stat 4: {pokemon.stats[3].stat.name} </li>
// </ul>

// <ul>
// <li>Regular Stat 5: {pokemon.stats[4].stat.name} </li>
// </ul>

// <ul>
// <li>Regular Stat 6: {pokemon.stats[5].stat.name} </li>
// </ul>

// {/* Base Stats */}
// <ul>
// <li>Base Stat 1a: {pokemon.stats[0].base_stat} </li>
// </ul>

// <ul>
// <li>Base Stat 1b: {pokemon.stats[1].base_stat} </li>
// </ul>

// <ul>
// <li>Base Stat 1c: {pokemon.stats[2].base_stat} </li>
// </ul>

// <ul>
// <li>Base Stat 1d: {pokemon.stats[3].base_stat} </li>
// </ul>

// <ul>
// <li>Base Stat 1e: {pokemon.stats[4].base_stat} </li>
// </ul>

// <ul>
// <li>Base Stat 1f: {pokemon.stats[5].base_stat} </li>
// </ul>