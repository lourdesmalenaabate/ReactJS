import React, { useEffect, useState } from "react";
import "./App.css";
import { helpHttp } from "./helpers/helpHttp";
import Quote from "./Quote";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [bg, setBg] = useState(null);

  const ajax = helpHttp();
  const apiQuote = "https://api.quotable.io/random";
  const apiColor = "https://62633b22c430dc560d2cf4d6.mockapi.io/colors";

  const random = () => {
    let random = Math.random();
    random *= 100;
    random = Math.round(random);
    return random;
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const [quoteRes, bgRes] = await Promise.all([
        ajax.get(apiQuote),
        ajax.get(apiColor),
      ]);

      if (quoteRes.err || bgRes.err) {
        throw new Error(
          `Ocurrió un error - Quote: ${quoteRes} || Bg: ${bgRes}`
        );
      }

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex" style={{ backgroundColor: bg }}>
      <Quote
        quote={quote}
        author={author}
        loading={loading}
        fetchData={fetchData}
      />
    </section>
  );
};

export default App;
