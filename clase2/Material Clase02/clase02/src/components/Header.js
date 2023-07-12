import "./Header.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import NavBar from "./NavBar";
import logo from "../img/logoIT.png";
import { animateScroll as scroller } from "react-scroll/modules";
import Boton from "./Boton";

const Header = () => {
  const { headerScroll } = useContext(ThemeContext);

  return (
    <header
      id="header"
      className={`fixed-top ${
        headerScroll && "header-scrolled header-inner-pages"
      }`}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-9 d-flex align-items-center justify-content-lg-between">
            <div className="logo me-auto me-lg-0 d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo it" onClick={scroller.scrollToTop} />
              <h1>Clase 02</h1>
            </div>
            <NavBar />
            <Boton
              ruta="mailto:anahiforesi.educacionit@gmail.com"
              clases="get-started-btn"
              texto="Contacto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
