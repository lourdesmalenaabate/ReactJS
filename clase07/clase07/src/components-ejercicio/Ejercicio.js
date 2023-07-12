import React, { useEffect, useState } from "react";
import "./Ejercicio.css";
import { helpHttp } from "./helpers/helpHttp";
import { Quote } from "./Quote";

function Ejercicio() {
  //Manejo del Estado con useState
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bg, setBg] = useState(null);

  //creación de valor random para cambio de color. Necesario por cómo se presenta la data de la API
  const random = () => {
    let random = Math.random();
    random *= 100;
    random = Math.round(random);
    return random;
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Función asincrónica que maneja las llamadas AJAX
  const fetchData = async () => {
    const quoteURL = "https://api.quotable.io/random";
    const bgURL = "https://62633b22c430dc560d2cf4d6.mockapi.io/colors";

    //Cambiar el valor de loading para manejar la visualización del spinner
    setLoading(true);

    try {
      //await múltiple
      const [quoteRes, bgRes] = await Promise.all([
        helpHttp().get(quoteURL),
        helpHttp().get(bgURL),
      ]);
      quoteRes.content !== undefined
        ? setQuote(quoteRes.content)
        : setQuote("No hay cita disponible");
      quoteRes.author !== undefined
        ? setAuthor(quoteRes.author)
        : setAuthor("Desconocido");

      const i = random();
      setBg(bgRes[i].color);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex" style={{ backgroundColor: `${bg}` }}>
      <Quote
        quote={quote}
        author={author}
        loading={loading}
        fetchData={fetchData}
      />
    </section>
  );
}

export default Ejercicio;
