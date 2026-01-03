import React from "react";
import "../css/nav.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />

      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <img src="/img/logo192.png" alt="logo" className="logo-img" />

      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/achievements">Achievements</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
