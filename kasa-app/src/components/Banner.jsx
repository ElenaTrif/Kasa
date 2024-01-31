import React from "react";
import img from "../assets/img1.png"

const Banner = () => {
  return (
    <div className="banner">
      <img src={img} alt="Banner montagnes" className="bannerImg" />
      <div className="cover"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
