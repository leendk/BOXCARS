import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">BOXCARS</div>

      <div className="navbar-content">
        <ul className={`menu ${menuOpen ? "show" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Listings</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="sign-in">
            <FontAwesomeIcon icon={faUser} /> Sign In
          </button>
          <button className="submit-btn">Submit Listing</button>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
