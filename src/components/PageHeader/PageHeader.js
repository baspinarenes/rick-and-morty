import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsPeopleFill, BsCameraVideoFill } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { Logo } from "../../assets/rick-and-morty-logo.png";

import "./PageHeader.scss";

function Header() {
  return (
    <header
      id="header"
      className="h-20 tablet:px-12 border-b-2 flex justify-center tablet:justify-between align-middle"
    >
      <Link to="/" data-testid="navigate-to-home">
        <img className="h-full object-fill" src={Logo} alt="" height="78" />
      </Link>
      <nav
        id="header-nav"
        className="justify-center items-center hidden tablet:flex"
      >
        <ul className="flex items-center h-5 gap-x-2">
          <li>
            <NavLink
              to="/character"
              data-testid="navigate-to-characters"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <span className="hidden laptop:block">Characters</span>
              <BsPeopleFill
                className="laptop:hidden"
                style={{ fontSize: "1.4rem" }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              data-testid="navigate-to-locations"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <span className="hidden laptop:block">Locations</span>
              <MdMyLocation
                className="laptop:hidden"
                style={{ fontSize: "1.3rem" }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/episode"
              data-testid="navigate-to-episodes"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <span className="hidden laptop:block">Episodes</span>
              <BsCameraVideoFill
                className="laptop:hidden"
                style={{ fontSize: "1.3rem" }}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
