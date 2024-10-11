/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={menuOpen ? "menu-open" : ""}>
        <div className="Nav_logo">
          <div className="Nav_logoimages">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="GeekFoods logo"
            />
          </div>
          <div className="logoname">
            <h2>GeekFoods</h2>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            &#9776; 
          </div>
        </div>
        <div className="Nav_navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link to="/foods">Foods</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="Nav_button">
          <button className="nav_button">Get started</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
