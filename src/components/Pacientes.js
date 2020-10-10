import React, { Component } from "react";

import TablaPacientes from "./TablaPacientes";

class Pacientes extends Component {
  render() {
    var pStyle = {
        display: 'flex', 
        justifyContent: 'center'
            }
    return (
      <div style={pStyle}>
        <TablaPacientes />
      </div>
    );
  }
}

export default Pacientes;
