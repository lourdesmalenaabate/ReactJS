import { useContext } from "react";
import LanguageContext from "../contexts-ejemplo/LanguageContext";
import ThemeContext from "../contexts-ejemplo/ThemeContext";

const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <footer className={`${theme} footer`}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default FooterContext;
