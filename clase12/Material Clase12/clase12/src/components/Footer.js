import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <p>
          Material de clase correspondiente al curso de ReactJS de Educacion It
          dictado por{" "}
          <a href="mailto:anahiforesi.educacionit@gmail.com">Anahí Foresi</a>
        </p>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>KnightOne</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
