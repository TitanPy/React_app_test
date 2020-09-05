import React, { Component } from "react";
import axios from "axios";

class Pacientes extends Component {


    state = {
        pacientes: [],
        status: null
    }
    componentWillMount(){
        this.getPacientes();
    }
    getPacientes = () =>{
        axios.get("http://localhost:3900/pacientes").then(res =>{
            this.setState({
                pacientes: res.data.patients,
                status: 'success'
            });
            console.log(this.state)
        })
        console.log("getPacientes");
    }
  render() {
    if(this.state.pacientes.length >= 1){
        var listaPacientes = this.state.pacientes.map((paciente)=> {
            return(
                <article className="article-item article-detail">
                <div className="image-wrap">
                    <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt="Paisaje" />
                </div>

                <h1 className="subheader" key={paciente._id}>{paciente.nombre}</h1>
                <span className="date" key={paciente._id}>
                    {paciente.fecha_alta}
                </span>
                </article>
            );
        })
        return (
            <div id="pacientes">
                {listaPacientes}
            </div>
          );
    }else if(this.state.pacientes.length === 0 && this.state.status === 'success'){
        return (
            <div id="pacientes">
              <h1>No hay articulos</h1>
            </div>
          );
    }else{
        return (
            <div id="pacientes">
              <h1>Cargando... Esperar</h1>
            </div>
          );
    }
    
  }
}

export default Pacientes;
