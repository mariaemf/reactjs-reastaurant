import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import { MdOutilineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => (
  <>
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p_opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p_opensans">
          <a href="#about">About</a>
        </li>
        <li className="p_opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p_opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p_opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;