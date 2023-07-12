function ComponentePadre(props = {}) {
  (() => {
    const state = { textoState: "Un texto almacenado en el State del Padre" };

    global.compartir = (valor) => state[valor];
  })();

  const texto = "Un texto en Componente Padre";

  const ComponenteHijo = (props = {}) => {
    console.log(props);
    console.log(texto);
    //console.log(state);
  };

  ComponenteHijo({ textoState: global.compartir("textoState") });
}

ComponentePadre();
