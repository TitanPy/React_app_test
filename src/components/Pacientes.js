import React, { Component } from "react";

import TablaPacientes from "./TablaPacientes";

class Pacientes extends Component {
  render() {
    return (
      <div className='content'>
        <TablaPacientes />
      </div>
    );
  }
}

export default Pacientes;
