import React, { Component } from "react";
import ComponenteConProps from "./ComponenteConProps";

export default class ComponenteClase extends Component {
  state = {
    titulo: "Componente de Clase",
    texto:
      "Este texto se muestra en el Componente Funcional como valor de Prop",
  };

  render() {
    return (
      <>
        <h1>{this.state.titulo}</h1>
        <ComponenteConProps
          texto={this.state.texto}
          propDrilling={this.props.propDrilling}
        />
      </>
    );
  }
}
