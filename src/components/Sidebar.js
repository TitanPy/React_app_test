import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import avatar from "../assets/images/avatar_4.png";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="sidebar" className="sideContainer">
          <div className="avatar-side">
            <h4>AQUI VA EL AVATAR + NOMBRE</h4>
          </div>
          <div className="menu-side">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/ruta-prueba" activeClassName="active">Ruta Pruebas</NavLink>
              </li>
              <li>
                <NavLink to="/segunda-ruta" activeClassName="active">Segunda Ruta</NavLink>
              </li>
              <li>
                <NavLink to="/pagina-1" activeClassName="active">Pagina 1</NavLink>
              </li>
              <li>P
                <NavLink to="/pruebas/daniel" activeClassName="active">Nombre</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
