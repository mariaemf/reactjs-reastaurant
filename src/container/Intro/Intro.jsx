import React from "react";
import { BsGillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => (
  <div className="app__video">
    <video src={meal} type="video/mp4" />
  </div>
);

export default Intro;
