import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useTimerCounter } from "../hooks/useTimerCounter";

const HooksPersonalizados = () => {
  const { value, isStopped, stop, start, reset } = useTimerCounter(100);
  const { loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const styles = {
    backgroundColor: "black",
    color: "white",
    height: "150px",
  };
  return (
    <section>
      <h2>Hooks Personalizados</h2>
      <section>
        <h3>Hook para crear un contador</h3>
        <span>Conteo: {value}</span>
        <br />
        <span>{isStopped ? "Detenido" : "Contando..."}</span>
        <br />
        <button onClick={stop}>Detener</button>
        <button onClick={start}>Reanudar</button>
        <button onClick={reset}>Reiniciar</button>
      </section>
      <section>
        <h3>Hook para manejar peticiones fetch</h3>
        {loading && <p style={styles}>"Cargando....."</p>}
        <ul>
          {data.length > 0 && data.map((el) => <li key={el.id}>{el.name}</li>)}
        </ul>
      </section>
    </section>
  );
};

export default HooksPersonalizados;
