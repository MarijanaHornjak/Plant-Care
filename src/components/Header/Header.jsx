import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/plants">Plants</Link>
      </div>
    </header>
  );
};

export default Header;
