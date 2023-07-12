import { useContext } from "react";
import AuthContext from "../contexts-ejemplo/AuthContext";
import LanguageContext from "../contexts-ejemplo/LanguageContext";
import ThemeContext from "../contexts-ejemplo/ThemeContext";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    <main className={`${theme} main`}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
