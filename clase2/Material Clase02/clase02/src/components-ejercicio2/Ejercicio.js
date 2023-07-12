import React, { useState } from "react";
import Empleado from "./Empleado";
import empleado1 from "./images/empleado1.webp";
import empleado2 from "./images/empleado2.webp";
import empleado3 from "./images/empleado3.webp";

const initialState = [
  { nombre: "Ana", cargo: "CEO", foto: empleado2 },
  { nombre: "Eva", cargo: "CTO", foto: empleado3 },
  { nombre: "Pep", cargo: "CEO", foto: empleado1 },
];

const Ejercicio = () => {
  const [empleados, setEmpleados] = useState(initialState);
  return (
    <>
      <h1>Nuestros Empleados</h1>
      <div className="contenedor">
        <Empleado
          nombre={empleados[0].nombre}
          cargo={empleados[0].cargo}
          foto={empleados[0].foto}
        />
        <Empleado
          nombre={empleados[1].nombre}
          cargo={empleados[1].cargo}
          foto={empleados[1].foto}
        />
        <Empleado
          nombre={empleados[2].nombre}
          cargo={empleados[2].cargo}
          foto={empleados[2].foto}
        />
      </div>
    </>
  );
};

export default Ejercicio;
