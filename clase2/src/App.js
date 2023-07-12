import { useState } from "react";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteUseState from "./components/ComponenteUseState";
import Eventos from "./components/Eventos";
import MostrarProps from "./components/MostrarProps";

function App() {
  const [propDrilling, setPropDrilling] = useState(
    "Texto en App. Sólo visible desde sus hijos mediante Prop. Los hijos App, pueden pasar este dato a sus hijos"
  );
  const funcionParaProp = () => "Texto en función";
  const obj = { texto: "Texto en Objeto" };
  const arr = ["Texto en Array"];

  return (
    <div className="App">
      <h1>Clase 02</h1>
      <ComponenteClase propDrilling={propDrilling} />
      <p>Los Componentes de Clase son los únicos que puden almacenar State</p>
      <ComponenteClase propDrilling={propDrilling} />
      <hr />
      <h2>Pasar Valores por Prop</h2>
      <MostrarProps
        datoString="Texto"
        datoNumber={5}
        datoBoolean={true}
        funcion={funcionParaProp}
        obj={obj}
        arr={arr}
      />
      <MostrarProps
        datoString="Texto 2"
        datoNumber={15}
        datoBoolean={false}
        funcion={() => "Texto en función 2"}
        obj={{ texto: "Texto en Objeto 2" }}
        arr={["Texto en Array 2"]}
      />
      <hr />
      <h2>Hook useState</h2>
      <p>Permite que los Componentes funcionales trabajen con el State</p>
      <ComponenteUseState />
      <hr />
      <h2>Eventos</h2>
      <Eventos />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
