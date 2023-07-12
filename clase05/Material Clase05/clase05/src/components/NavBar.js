import React, { useRef } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import SectionContext from "../context/SectionContext";

const NavBar = () => {
  const { mobile, handleMobileMenu } = useContext(ThemeContext);
  const { temas } = useContext(SectionContext);
  const menu = useRef();
  const icono = useRef();

  const handleClickLink = () => {
    if (!mobile) return;

    handleMobileMenu(menu, icono);
  };

  return (
    <nav id="navbar" className="navbar order-last order-lg-0" ref={menu}>
      <ul>
        <li>
          <Link
            className="nav-link a"
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClickLink}>
            Home
          </Link>
        </li>
        {temas.map((el) => (
          <li key={`${el.id}`}>
            <Link
              className="nav-link a"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              to={el.id}
              onClick={handleClickLink}>
              {el.titulo}
            </Link>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={() => handleMobileMenu(menu, icono)}
        ref={icono}></i>
    </nav>
  );
};

export default NavBar;
