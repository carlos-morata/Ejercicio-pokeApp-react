import React from "react";

const Search = ({ onSearch }) => {

  const handleSumbit = e => {
    e.preventDefault();
    onSearch(e.target.search.value);
  }

  return <section>
    <h2>Buscar Pokemons</h2>
    <form onSubmit={handleSumbit}>
      <input type="text" />
      <button>Buscar</button>
    </form>
  </section>;
};

export default Search;
