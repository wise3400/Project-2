import React, { useEffect, useState } from 'react';

// https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/
// https://www.geeksforgeeks.org/react-js-pokemon-app/

export default function Pokemon() {
  const [thePokemons, setPokemons] = useState([]);
  
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
    <div>
      <h1>Pokemon</h1>
      <ul>
        {thePokemons.map((pokemon, index) => (
          <li key={index}>
            
           {/* Names */}
            {pokemon.name}
           
           {/* Images */}
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            
            {/* Height & Weight */}
            <ul>
              <li>Height: {pokemon.height}</li>
            </ul>
            
            <ul>
            <li>Weight: {pokemon.weight}</li>
            </ul>
            
            {/* Regular Stats */}
            <ul>
            <li>Description 1: {pokemon.stats[0].stat.name} </li>
            </ul>

            <ul>
            <li>Description 2: {pokemon.stats[1].stat.name} </li>
            </ul>

            <ul>
            <li>Description 3: {pokemon.stats[2].stat.name} </li>
            </ul>

            <ul>
            <li>Description 4: {pokemon.stats[3].stat.name} </li>
            </ul>

            <ul>
            <li>Description 5: {pokemon.stats[4].stat.name} </li>
            </ul>

            <ul>
            <li>Description 6: {pokemon.stats[5].stat.name} </li>
            </ul>

             {/* Base Stats */}
            <ul>
            <li>Description 1a: {pokemon.stats[0].base_stat} </li>
            </ul>

            <ul>
            <li>Description 1b: {pokemon.stats[1].base_stat} </li>
            </ul>
            
            <ul>
            <li>Description 1c: {pokemon.stats[2].base_stat} </li>
            </ul>

            <ul>
            <li>Description 1d: {pokemon.stats[3].base_stat} </li>
            </ul>
            
            <ul>
            <li>Description 1e: {pokemon.stats[4].base_stat} </li>
            </ul>

            <ul>
            <li>Description 1f: {pokemon.stats[5].base_stat} </li>
            </ul>
          
          
          
          
          
          
          
          </li>
        ))}
      </ul>
    </div>
  );
}
