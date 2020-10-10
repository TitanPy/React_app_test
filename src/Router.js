import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Importar componentes
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AltaPaciente from "./components/AltaPaciente";
import Pacientes from "./components/Pacientes";
// import MiComponente from "./components/sample/MiComponente";
// import MiComponente2 from "./components/sample/MiComponente2";
// import Peliculas from "./components/sample/Peliculas";
// 
import Error from "./components/Error";

// // Sample
// import Peliculas from './components/sample/Peliculas';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Switch>
          {/* AQUI IRAN TODAS LAS RUTAS */}
          <Route exact path="/alta_pacientes" component={AltaPaciente} />
          <Route exact path="/pacientes" component={Pacientes} />
          {/* <Route exact path="/home" component={Peliculas} />
          <Route exact path="/ruta-prueba" component={MiComponente} />
          <Route exact path="/segunda-ruta" component={MiComponente2} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/pagina-1" render={() => <h1>Hola mundo</h1>} />

          <Route
            exact
            path="/pruebas/:nombre/:apellidos?"
            render={(props) => {
              var nombre = props.match.params.nombre;
              var apellidos = props.match.params.apellidos;

              return (
                <div id="content">
                  <h1 className="subheader">Pagina de pruebas</h1>
                  {nombre && !apellidos && <span>{nombre}</span>}
                  {nombre && apellidos && (
                    <span>{nombre + " " + apellidos}</span>
                  )}
                </div>
              );
            }}
          /> */}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
