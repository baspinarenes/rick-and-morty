import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/rick-and-morty-logo.png";
import "./Header.scss";

function Header() {
  return (
    <header
      id="header"
      className="h-20 px-12 border-b-2 flex justify-between align-middle"
    >
      <Link to="/">
        <img className="h-full" src={Logo} alt="" height="70" />
      </Link>
      <nav id="header-nav" className="flex justify-center items-center">
        <ul className="flex h-5 gap-x-2">
          <li>
            <NavLink
              to="/character"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/episode"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Episodes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
