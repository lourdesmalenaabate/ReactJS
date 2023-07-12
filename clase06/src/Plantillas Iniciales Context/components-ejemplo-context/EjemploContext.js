import "./ThemeContext.css";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

const EjemploContext = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <div className="body">
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default EjemploContext;
