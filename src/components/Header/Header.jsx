import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import PlantNurseIcon from "../../assets/plantnurseicon.png";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const toggleDropdownMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };
  return (
    <header>
      <Link to="/">
        <img src={PlantNurseIcon} alt="icon" className="icon" />
      </Link>

      <div className="header-link-container">
        <NavLink to="/plants" className="header-link">
          Plants
        </NavLink>
        <NavLink to="/care" className="header-link">
          Care
        </NavLink>
        <NavLink to="/" className="header-link">
          Home
        </NavLink>
        <NavLink to="/about" className="header-link">
          About
        </NavLink>
        {dropdownMenu ? (
          <AiOutlineClose className="menu-icon" onClick={toggleDropdownMenu} />
        ) : (
          <RxHamburgerMenu className="menu-icon" onClick={toggleDropdownMenu} />
        )}
      </div>
      {dropdownMenu && <DropdownMenu toggleDropdownMenu={toggleDropdownMenu} />}
    </header>
  );
};

export default Header;
