import React from "react";
import logo from "../assets/Pokemon logo.png";

const Header = () => {
  return (
    <header className="header">
      <img id="pokemon-logo" src={logo} alt="Pokemon logo" />
      <p>A memory game</p>
    </header>
  );
};

export default Header;
