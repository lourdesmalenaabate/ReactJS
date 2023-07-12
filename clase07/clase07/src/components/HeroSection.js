import React from "react";
import "./HeroSection.css";
import logo from "../img/logo.svg";

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <h1>ReactJS - Clase 07</h1>
            <img src={logo} alt="logo react" className="App-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
