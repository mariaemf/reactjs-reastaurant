import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        A key to a great dinner is to use fresh.
        <br /> quality ingredients,prepare them with care, <br />
        and enjoy good company
      </p>
      <button type="button" className="custom__button">
        {" "}
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
