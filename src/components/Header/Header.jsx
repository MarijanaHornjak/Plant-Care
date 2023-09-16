import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import PlantNurseIcon from "../../assets/plantnurseicon.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={PlantNurseIcon} alt="icon" className="icon" />
      </Link>

      <div className="header-link-container">
        <Link to="/plants" className="header-link">
          Plants
        </Link>
        <Link to="/care" className="header-link">
          Care
        </Link>
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/about" className="header-link">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
