import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="header">
                    <div className="center">
                        {/*LOGO */}
                        <div id="logo">
                            <img src={logo} className="app-logo" alt="Logotipo" />
                            <span id="brand">
                                <strong>Fisio</strong>App
                            </span>
                        </div>

                        {/*MENU */}
                        <nav id="menu">
                            <ul>
                                <li>
                                    <a href="#">Inicio</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Formulario</a>
                                </li>
                                <li>
                                    <a href="#">Pagina 1</a>
                                </li>
                                <li>
                                    <a href="#">Pagina 2</a>
                                </li>
                            </ul>
                        </nav>

                        {/* LIMPIAR FLOTADOS */}
                        <div className="clearfix"></div>
                    </div>
                </header>
            </React.Fragment>
        );
    }

}

export default Header;


