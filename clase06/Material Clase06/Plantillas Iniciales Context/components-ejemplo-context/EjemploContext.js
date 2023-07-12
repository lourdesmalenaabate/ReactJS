import "./ThemeContext.css";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const EjemploContext = () => {
  return (
    <div className="body">
      <HeaderContext />
      <MainContext />
      <FooterContext />
    </div>
  );
};

export default EjemploContext;
