import React, { Component } from "react";
import Pacientes from './Pacientes';
//import axios from "axios";

class MiComponente extends Component {
  state = {
    paciente: {},
    status: null,
  };

  render() {
    // axios.get("http://localhost:3900/pacientes").then((res) => {
    //   //console.log(res.data);
    //   this.setState({
    //     paciente: res.data.patients,
    //     status: "success",
    //   });
    // });

    let receta = {
      nombre: "pizza",
      ingredientes: ["queso", "carne", "champiñon"],
      calorias: 500,
    };
    return (
      <React.Fragment>
        <h1>{receta.nombre}</h1>
        <h2>{receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((n, i) => {
            return <li key={i}>{n}</li>;
          })}
        </ol>

        <div className="center">
          <div id="content">
            {/* listado de pacientes */}
            <Pacientes />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MiComponente;
