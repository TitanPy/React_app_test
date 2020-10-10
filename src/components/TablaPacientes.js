import React, { Component } from "react";
import axios from "axios";
import CheckBox from './CheckBox';
class TablaPaciente extends Component {
  state = {
    pacientes: [],
    status: null,
  };

  handleChangeChk  =() =>{
    this.state.chkbox = true
    console.log(this.state)
  }

  componentDidMount() {
    this.getPacientes();
  }

  getPacientes = () => {
    axios.get("http://localhost:3909/pacientes").then((res) => {
      this.setState({
        pacientes: res.data.patients,
        status: "success",
        chkbox: false,
      });
      console.log(this.state);
    });
    console.log("getPacientes");
  };
  render() {
    var listaPacientes = this.state.pacientes.map((paciente) => {
      return (
        <tr key={paciente._id}>
          <td><input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk}/>
            {this.state.chkbox === true &&
              <CheckBox id={paciente._id}/>
            }
          </td>
          <td>{paciente._id}</td>
          <td>{paciente.nombre}</td>
          <td>{paciente.apellidos}</td>
          <td>{paciente.email}</td>
        </tr>
      );
    });
    return (
      <React.Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{listaPacientes}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TablaPaciente;
