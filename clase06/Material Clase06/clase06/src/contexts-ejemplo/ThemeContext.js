//Creación de un Provier
import { createContext, useState } from "react";

//El método createContext crea el objeto que contiene la información del Contexto Actual.
//Internamente tiene un Provider(Componente que comparte los datos) y Consumer(Componentes que usan los datos)
const ThemeContext = createContext();

//Estado inicial del Componente
const initialTheme = "light";

//Creación de Provider
const ThemeProvider = ({ children }) => {
  //useState para manejo del estado del Componente
  const [theme, setTheme] = useState(initialTheme);

  //Handle del cambio de estado
  const handleTheme = (e) =>
    e.target.value === "light" ? setTheme("light") : setTheme("dark");

  //Datos a los que el Consumer tiene acceso
  const data = { theme, handleTheme };

  //Retorno del Contexto al que van a poder acceder los Componenetes Hijos
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

//Exportación del Provider el Contexto Actual
export { ThemeProvider };
//Exportación del Contexto Actual
export default ThemeContext;
