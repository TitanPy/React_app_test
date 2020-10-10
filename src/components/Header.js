import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <img src={logo} className="header__logo" />
          <span className="header__title">
            <strong>Fisio</strong>App
          </span>
          <ExitToAppIcon className="header__exit" fontSize="large" />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
