import { AuthProvider } from "../contexts-ejemplo/AuthContext";
import { LanguageProvider } from "../contexts-ejemplo/LanguageContext";
import { ThemeProvider } from "../contexts-ejemplo/ThemeContext";
import "./ThemeContext.css";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const EjemploContext = () => {
  return (
    <div className="body">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default EjemploContext;
