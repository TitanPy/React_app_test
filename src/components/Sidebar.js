import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import avatar from "../assets/images/avatar_4.png";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <p className="sidebar__avatar">
            <h4>AQUI VA EL AVATAR + NOMBRE</h4>
          </p>
          <hr className="sidebar__line" />
          <ul className="sidebar__menu">
            <li>
              <NavLink to="/home" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/alta_pacientes" activeClassName="active">
                Alta Pacientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/pacientes" activeClassName="active">
                Pacientes
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
