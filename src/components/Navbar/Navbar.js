import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a className="logo" href="#">
            <p>грузовик</p>
          </a>
          <div
            id="links"
            className={`navbar-responsive ${toggle ? "open" : ""}`}
          >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            class="menu-btn"
            id="menu-btn"
          >
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
