import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const DropdownMenu = ({ toggleDropdownMenu }) => {
  return (
    <div className="dropdown-menu" >
      <div className="drop-down-link-container">
        <Link to="/plants" className="header-link" onClick={toggleDropdownMenu}>
          Plants
        </Link>
        <Link to="/care" className="header-link" onClick={toggleDropdownMenu}>
          Care
        </Link>
        <Link to="/" className="header-link" onClick={toggleDropdownMenu}>
          Home
        </Link>
        <Link to="/about" className="header-link" onClick={toggleDropdownMenu}>
          About
        </Link>

      </div>
      <div className="drop-down-layout" onClick={toggleDropdownMenu}></div>
    </div>
  );
};

export default DropdownMenu;
