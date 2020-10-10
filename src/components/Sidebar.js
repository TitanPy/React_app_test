import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import avatar from "../assets/images/avatar_4.png";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <div className="sidebar__avatar">
            <h4>AQUI VA EL AVATAR + NOMBRE</h4>
          </div>
          <hr className="sidebar__line" />
          <ul className="sidebar__menu">
            <li>
              <NavLink to="/home" activeClassName="active" className='sidebar__link'>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/alta_pacientes" activeClassName="active" className='sidebar__link'>
                Alta Pacientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/pacientes" activeClassName="active" className='sidebar__link'>
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
