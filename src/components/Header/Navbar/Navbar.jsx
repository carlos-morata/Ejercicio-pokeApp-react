import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <nav>
    <ul>
      <li><Link to='/'>Buscar Pokemon</Link></li>
      <li><Link to='/new'>Nuevo Pokemon</Link></li>
      <li><Link to='/pokemon/:id'>Vista Pokemon</Link></li>
    </ul>
  </nav>;
};

export default Navbar;
