
import PokemonCard from './PokemonCard.jsx'
import React, { useEffect, useState } from 'react';

// https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/
// https://www.geeksforgeeks.org/react-js-pokemon-app/
// https://pokeapi.co/

export default function Pokemon() {
  const [thePokemons, setPokemons] = useState([]);
 

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
          <PokemonCard pokemon = {pokemon} index = {index} key = {index} />

        ))}
      </div>
       
  );
}