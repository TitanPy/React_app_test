import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="header">
          <div className="center">
            <div id="logo">
              <img src={logo} className="app-logo" alt="Logotipo" />
              <span id="brand">
                <strong>Fisio</strong>App
              </span>
            </div>
            <div id="exit-app">
              <ExitToAppIcon fontSize="large" />
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
