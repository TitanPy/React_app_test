import { Divider } from "@material-ui/core";
import React, { Component } from "react";
import FormularioAlta from './FormularioAlta';

class AltaPaciente extends Component {
  render() {
    return (
      <div className='content'>
        <div className='content__altapaciente'>
          <h1>SOY ALTA PACIENTE</h1>
          <FormularioAlta />
        </div>
      </div>
    );
  }
}

export default AltaPaciente;
