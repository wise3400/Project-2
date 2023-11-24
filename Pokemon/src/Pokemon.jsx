import React, { useEffect, useState } from 'react';

//https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/

export default function Pokemon() {
  
    const [thePokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(data => setPokemons(data.results))
        .catch(error => console.error('Error fetching Pokemon:', error));
    };

    getPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {thePokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
