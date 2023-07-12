import { useState, createContext, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let sizes = useWindowSize();
  const [screen, setScreen] = useState(sizes.width);
  const [mobile, setMobile] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [menuMobile, setMenuMobile] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll !== 0) {
        setHeaderScroll(true);
        setScroll(currentScroll);
      }
      if (currentScroll === 0) {
        setHeaderScroll(false);
        setScroll(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { pasive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  const handleMobileMenu = (menu, icono) => {
    if (menuMobile) {
      menu.current.classList.add("navbar-mobile");
      icono.current.classList.add("bi-x");
      icono.current.classList.remove("bi-list");
    } else {
      menu.current.classList.remove("navbar-mobile");
      icono.current.classList.remove("bi-x");
      icono.current.classList.add("bi-list");
    }

    setMenuMobile(!menuMobile);
  };

  useEffect(() => {
    setScreen(sizes.width);
    screen >= 992 ? setMobile(false) : setMobile(true);
  }, [screen, sizes]);

  const data = { mobile, headerScroll, handleMobileMenu };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
