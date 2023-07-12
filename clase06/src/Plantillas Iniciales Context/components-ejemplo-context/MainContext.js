import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);
  return (
    <main className={`${theme} main`}>
      <h3>{auth ? texts.mainHello : texts.mainWelcome}</h3>
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
