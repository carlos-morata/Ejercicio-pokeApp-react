import React, {useState, useEffect} from "react";
import axios from 'axios';
import Search from './Search'
import PokemonList from "./PokemonList";

// https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0

const SearchContainer = () => {
        // Guardamos el dato a buscar
      const [searchValue, setSearchValue] = useState("Pikachu");
      const [pokemon, setPokemon] = useState([]);
    
      useEffect(() => {
        async function fetchWeather() {
          // const API_KEY = import.meta.env.VITE_API_KEY
  
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
            const json = res.data;
  
            setPokemon(json);
          } catch(e) {
            console.log(e);
            setPokemon([]);
          }
        }
        fetchWeather();
      }, [searchValue]);
  
    const handleSearch = (pokemonName) => {
      setSearchValue(pokemonName)
    }

  return <section>
    <Search onSearch={handleSearch} />
    <PokemonList data={pokemon} />
  </section>;
};

export default SearchContainer;
