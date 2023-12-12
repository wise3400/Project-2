
import PokemonCard from './PokemonCard.jsx'
import React, { useEffect, useState, useMemo } from 'react';

// https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/
// https://www.geeksforgeeks.org/react-js-pokemon-app/
// https://pokeapi.co/

export default function Pokemon() {
  const [thePokemons, setPokemons] = useState([]);
  const [isInfoShown, setIsShown] = useState(false);
  const [selectedType, setSelectedType] = useState("all")
  const filteredPokemon = useMemo(() => filterPokemon(thePokemons, selectedType), [thePokemons, selectedType])

  useEffect(() => {
    const getPokemon = async () => 
    {
      try 
      {
        const fetchAPI1 = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
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

  function filterPokemon(pokemons, type) {
    if (type !== "all") {
      return pokemons.filter(pokemon => pokemon.types[0].type.name === type)
    }
    else {
      return pokemons
    }
  }

  return (

      <div>
        <select 
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="ice">Ice</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
        </select>
        <div className='flex-parent'>
          {filteredPokemon.map((pokemon, index) => (
            <PokemonCard pokemon = {pokemon} index = {index} key = {index}  showInfo={isInfoShown} setShowInfo={setIsShown}/>

          ))}
        </div>
      </div>
       
  );
}