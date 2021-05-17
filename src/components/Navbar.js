import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import Bottom__Navbar from "../mobile__components/Bottom__Navbar";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__desktop">
        <div className="logo">
          <div className="logo__head">La Tourte</div>
        </div>
        <div className="nav__list">
          <Link to="/" className="nav__item">
            <div>Home</div>
          </Link>
          <Link to="/menu" className="nav__item">
            <div>Menu</div>
          </Link>
          <div className="nav__item">About</div>
          <div className="nav__item">Locate Us</div>
          <div className="nav__item">Contact</div>
          <div className="nav__item">Feedback</div>
        </div>
      </div>
      <Bottom__Navbar />
    </div>
  );
}

export default Navbar;
