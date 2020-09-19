import React, { Component } from "react";
import axios from "axios";

class FormularioAlta extends Component {
  nombreRef = React.createRef();
  apellidoRef = React.createRef();
  direccionRef = React.createRef();
  emailRef = React.createRef();
  telefonoRef = React.createRef();
  fechaRef = React.createRef();

  state = {
    user: {},
    status: null
  };

  changeState = () => {
    this.setState({
      user: {
        nombre: this.nombreRef.current.value,
        apellidos: this.apellidoRef.current.value,
        direccion: this.direccionRef.current.value,
        email: this.emailRef.current.value,
        telefono: this.telefonoRef.current.value,
        fecha_nacimiento: this.fechaRef.current.value,
      },
    });
  };

  recibirFormulario = (e) => {
    e.preventDefault();
    // rellena formulario
    this.changeState();
    // guarda datos a través de la API
    axios.post("http://localhost:3909/registro", (this.state.user)).then(res => {
        if (res.data.status === 'success') {
          this.setState({
            status: "success",
          });
        } else {
          this.setState({
            status: "failed",
          });
        }
        
        console.log(res.data);
      });
  };
  render() {
    if (this.state.user.nombre) {
      var user = this.state.user;
    }

    return (
      <React.Fragment>
        {/* mostrar datos del formulario */}
        {this.state.status === 'success' && (
          <div>
            <p>
              Nombre: <strong>{user.nombre}</strong>
            </p>
            <p>
              Apellidos: <strong>{user.apellidos}</strong>
            </p>
            <p>
              Email:<strong>{user.email}</strong>
            </p>
            <p>
              Telefono:<strong>{user.telefono}</strong>
            </p>
            <p>
              Direccion:<strong>{user.direccion}</strong>
            </p>
            <p>
              Fecha de nacimiento:<strong>{user.fecha_nacimiento}</strong>
            </p>
          </div>
        )}
        {/* crear un formulario */}
        <form className="mid-form" onSubmit={this.recibirFormulario}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" ref={this.nombreRef} onChange={this.changeState}/>
          </div>

          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellidos" ref={this.apellidoRef} onChange={this.changeState} />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input type="date" name="fecha" ref={this.fechaRef} onChange={this.changeState} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" ref={this.emailRef} onChange={this.changeState}/>
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Telefono</label>
            <input type="text" name="telefono" ref={this.telefonoRef} onChange={this.changeState} />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" name="direccion" ref={this.direccionRef} onChange={this.changeState}/>
          </div>

          <div className="clearfix"></div>

          <input type="submit" value="Enviar" className="btn btn-success" />
        </form>
      </React.Fragment>
    );
  }
}

export default FormularioAlta;
