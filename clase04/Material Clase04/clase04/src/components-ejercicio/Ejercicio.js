import React, { useState } from "react";
import "./Ejercicio.css";
import { data } from "./data";
import Lista from "./Lista";

const Ejercicio = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <Lista people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default Ejercicio;
