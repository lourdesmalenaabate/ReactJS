import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import { SectionProvider } from "./context/SectionContext";
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
      {/* <Ejercicio /> */}
    </>
  );
}

export default App;
