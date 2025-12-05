import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");
  return <header>
    <h1>Ejercicio PokeApp</h1>
    <Navbar />
  </header>;
};

export default Header;
