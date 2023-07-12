import { createContext } from "react";

const SectionContext = createContext();
const temas = [
  {
    id: "lifting",
    titulo: "Lifting State Up",
    texto:
      "En ocaciones nos encontramos en la necesidad de compatir la información del Estado de un Componente con otr que se encuentra al mismo nivel en el Árbol de Componentes. Si tenemos presente la forma en que React maneja el Flujo de Datos, entonces la solución se hace sencilla: Creamos un Componente superior a estos dos y pasamos el Estado que queremos compartir a este. Esta técnica de programación es conocida como 'Lifting State UP (Uplifting State)' (Levantando el Estado)",
    images: [
      "assets/images/lifting1.png",
      "assets/images/lifting2.png",
      "assets/images/lifting3.png",
    ],
    doc: "https://es.reactjs.org/docs/lifting-state-up.html#gatsby-focus-wrapper",
    secundarios: [
      {
        id: "ejemploLifting",
        titulo: "Ejemplo de Uso",
        texto: "",
        images: [
          "assets/images/ejemploLifting1.png",
          "assets/images/ejemploLifting2.png",
          "assets/images/ejemploLifting3.png",
        ],
        doc: "",
      },
    ],
  },
  {
    id: "renderizado",
    titulo: "Renderizado Condicional",
    texto:
      "El renderizado condicional no es otra cosa que aplicar los distintos elementos de elección condicional dados por JS para elegir qué elemento JSX/Componente mostrar dada cierta condición",
    images: ["assets/images/condicional.png"],
    doc: "",
    secundarios: [],
  },
  {
    id: "renderizadoListas",
    titulo: "Renderizado Listas",
    texto:
      "Cuando trabajamos con Listas en React es necesario otorgarle un valor de key único a cada elemento para que el VirtualDOM sea capaz de distinguir a cada elemento y, de esa forma, saber si alguno fue cambiado",
    images: [
      "assets/images/listas1.png",
      "assets/images/listas2.png",
      "assets/images/listas3.png",
    ],
    doc: "https://es.reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper",
    secundarios: [],
  },
  {
    id: "cicloVida",
    titulo: "Ciclo de Vida",
    texto:
      "El Ciclo de Vida de un Componente son métodos que se ejecutan automáticamente en un Componente de clase. Estos métodos pueden ser sobreescritos y se dividen en tres fases: Montaje, Actualización, Desmontaje",
    images: [],
    doc: "https://es.reactjs.org/docs/state-and-lifecycle.html#gatsby-focus-wrapper",
    secundarios: [
      {
        id: "montaje",
        titulo: "Montaje",
        texto:
          "Estos métodos se ejecutan cuando se crea un componente y se inserta en el arbol del DOM.",
        images: ["assets/images/montaje.png"],
        doc: "",
      },
      {
        id: "actualizacion",
        titulo: "Actualización",
        texto:
          "Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes.",
        images: ["assets/images/actualizacion.png"],
        doc: "",
      },
      {
        id: "desmontaje",
        titulo: "Desmontaje",
        texto:
          "Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.",
        images: ["assets/images/desmontaje.png"],
        doc: "",
      },
    ],
  },
  {
    id: "useEffect",
    titulo: "Hook useEffect",
    texto:
      "Permite hacer uso del ciclo de vida en un componente funcional. Usar useEffect equivale a la combinación de los métodos: 'componentDidMount() (montaje)', 'componentDidUpdate() (actualización)' y componentWillUnmount() (desmontaje). El Hook useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades.",
    images: [],
    doc: "",
    secundarios: [
      {
        id: "uso1",
        titulo: "Usando useEffect",
        texto:
          "Para añadir un efecto que se ejecutará cada vez que nuestro componente se renderice, se debe pasar como parámetro una función al hook useEffect misma que se ejecutará al renderizarse el componente.",
        images: ["assets/images/useEffect1.png"],
        doc: "",
      },
      {
        id: "uso2",
        titulo: "Combinar useEffect con Eventos",
        texto:
          "Con useEffect también podemos suscribirnos y desuscribirnos a eventos, temporizadores, servicios, API's, etc. Para ello hay que escribir el código de la suscripción en el cuerpo de la función de useEffect y para evitar problemas de rendimiento o aumento indiscriminado de la memoria y recursos de nuestra aplicación retornar en una función el código que desuscriba o cancele lo que se ejecuto en el cuerpo de la función.",
        images: [
          "assets/images/useEffect2.png",
          "assets/images/useEffect3.png",
        ],
        doc: "",
      },
    ],
  },
  {
    id: "formulario",
    titulo: "Formularios",
    texto:
      "Los elementos de formularios en HTML funcionan un poco diferente a otros elementos del DOM en React, debido a que los elementos de formularios conservan naturalmente algún estado interno. Imaginemos que tenemos un formulario que cuyo comportamiento predeterminado en HTML que consiste en navegar a una nueva página cuando el usuario envía el formulario. Si deseas este comportamiento en React, simplemente ya funciona así. Pero en la mayoría de casos, es conveniente tener una función en Javascript que se encargue del envío del formulario, y que tenga acceso a los datos que el usuario introdujo en el formulario. La forma predeterminada para conseguir esto es una técnica llamada “componentes controlados”.",
    images: [],
    doc: "https://es.reactjs.org/docs/forms.html#gatsby-focus-wrapper",
    secundarios: [
      {
        id: "controlado",
        titulo: "Controlados",
        texto:
          "En HTML, los elementos de formularios como los <input>, <textarea> y el <select> normalmente mantienen sus propios estados y los actualizan de acuerdo a la interacción del usuario. En React, el estado mutable es mantenido normalmente en la propiedad estado de los componentes, y solo se actualiza con setState().          Podemos combinar ambos haciendo que el estado de React sea la “única fuente de la verdad”. De esta manera, los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario. Un campo de un formulario cuyos valores son controlados por React de esta forma es denominado “componente controlado”.",
        images: ["assets/images/formControlado.png"],
        doc: "",
      },
      {
        id: "referencias",
        titulo: "No Controlados",
        texto:
          "A veces puede ser tedioso usar componentes controlados, debido a que se necesita escribir un controlador de eventos para cada forma en la que tus datos puedan cambiar y agregarlos a todos en el estado del input a través del componente React. Esto puede volverse particularmente molesto cuando estás convirtiendo una base de código existente a React, o integrando una aplicación React con una biblioteca que no integra React. En estas situaciones, puede que quieras leer acerca de componentes no controlados, una técnica alternativa para implementar inputs en formularios. Una de estas alternativas es el uso de 'Referencias'. Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado. De esta forma, vamos a ser capaces de acceder al elemento de formulario directamente desde el DOM.",
        images: ["assets/images/useRef.png"],
        doc: "https://es.reactjs.org/docs/refs-and-the-dom.html",
      },
    ],
  },
  {
    id: "ejercicio",
    titulo: "Ejercicio",
    texto:
      "Para prácticar todo los visto hasta ahora vamos a crear una app que usando un formulario controlado le permita al usuario escribir una frase y visualizarla",
    images: [],
    doc: "",
    secundarios: [],
  },
];

const SectionProvider = ({ children }) => {
  const data = { temas };
  return (
    <SectionContext.Provider value={data}>{children}</SectionContext.Provider>
  );
};

export { SectionProvider };
export default SectionContext;
