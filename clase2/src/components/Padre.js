import React, { Component } from "react";
import Hijo from "./Hijo";

export default class Padre extends Component {
  state = {
    contador: 0,
    texto: "Algo",
  };

  incrementarContador = () => {
    const newState = {
      contador: this.state.contador + 1,
    };
    this.setState(newState);
    /* this.setState({
        contador: this.state.contador + 1
    }) */
  };

  cambiarTexto = (text) => {
    this.setState({
      texto: text,
    });
  };

  render() {
    return (
      <>
        <h2>Ejemplo Comunicación Hijo a Padre</h2>
        <Hijo
          contador={this.state.contador}
          incrementarContador={this.incrementarContador}
          texto={this.state.texto}
          cambiarTexto={this.cambiarTexto}
        />
      </>
    );
  }
}
