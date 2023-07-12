import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "./components/Inicio";
import RutaPrivada from "./components/RutaPrivada";
import { RutasProvider } from "./context/RutasContext";

const App = () => {
  return (
    <RutasProvider>
      <div className="p-2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/privada" element={<RutaPrivada />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RutasProvider>
  );
};

export default App;
