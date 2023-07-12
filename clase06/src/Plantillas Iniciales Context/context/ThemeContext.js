import { createContext, useState } from "react";

//1ro - Crear el Contexto
const ThemeContext = createContext();

const initialTheme = "light";
//2do - Crear el Provider (Envoltorio que permite el acceso a los datos)
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) =>
    e.target.value === "light" ? setTheme("light") : setTheme("dark");

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

//3ro - Exportar el Provider y el Context
export { ThemeProvider };
export default ThemeContext;
