import React from "react";

const PokemonList = ({list}) => {
  return <section>
    <ul>
      {list.map(item => (
        <li></li>
      ))}
    </ul>
  </section>;
};

export default PokemonList;
