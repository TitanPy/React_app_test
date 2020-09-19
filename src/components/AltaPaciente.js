import React, { Component } from "react";
import FormularioAlta from './FormularioAlta';

class AltaPaciente extends Component {
  render() {
    return (
      <React.Fragment>
       <h1>SOY ALTA PACIENTE</h1>
       <FormularioAlta />
      </React.Fragment>
    );
  }
}

export default AltaPaciente;
