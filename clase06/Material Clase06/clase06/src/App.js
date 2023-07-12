import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import { SectionProvider } from "./context/SectionContext";
import EjemploRutas from "./components-ejemplo-rutas/EjemploRutas";
import EjemploContext from "./components-ejemplo-context/EjemploContext";
import Ejercicio from "./components-ejercicio/Ejercicio";

function App() {
  return (
    <>
      <ThemeProvider>
        <SectionProvider>
          <Header />
          <HeroSection />
          <Main />
        </SectionProvider>
        <Footer />
      </ThemeProvider>
      {/* <EjemploRutas /> */}
      {/* <EjemploContext /> */}
      {/* <Ejercicio /> */}
    </>
  );
}

export default App;
