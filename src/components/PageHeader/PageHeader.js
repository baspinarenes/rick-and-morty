import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsPeopleFill, BsCameraVideoFill } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";

import "./PageHeader.scss";

function Header() {
  return (
    <header
      id="header"
      className="tablet:h-20 tablet:px-12 border-b-2 flex flex-col justify-center tablet:flex-row tablet:justify-between align-middle"
    >
      <Link
        to="/"
        data-testid="navigate-to-home"
        className="w-full border-b-2 tablet:border-b-0 tablet:mx-0"
      >
        <img
          className="max-h-20 mx-auto tablet:mx-0"
          src={`${process.env.PUBLIC_URL}/assets/rick-and-morty-logo.png`}
          alt=""
          width="350.7"
          height="78"
        />
      </Link>
      <nav id="header-nav" className="justify-center items-center flex p-2">
        <ul className="flex items-center tablet:h-5 gap-x-2">
          <li>
            <NavLink
              to="/character"
              data-testid="navigate-to-characters"
              activeClassName="bg-custom-gradient"
              className="text-gray-500 px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <span className="tablet:hidden laptop:block">Characters</span>
              <BsPeopleFill
                className="hidden tablet:block laptop:hidden"
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
              <span className="tablet:hidden laptop:block">Locations</span>
              <MdMyLocation
                className="hidden tablet:block laptop:hidden"
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
              <span className="tablet:hidden laptop:block">Episodes</span>
              <BsCameraVideoFill
                className="hidden tablet:block laptop:hidden"
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
