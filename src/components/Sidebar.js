import React, { Component } from 'react';
import avatar from "../assets/images/avatar_4.png";


class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
               <div id="sidebar" className='sideContainer'>
                <div className='avatar-side'>
                   <h4>AQUI VA EL AVATAR + NOMBRE</h4>
                </div>
                <div className='menu-side'>
                    <ul>
                        <li>Pacientes</li>
                        <li>Pagina 1</li>
                        <li>Pagina 2</li>
                        <li>Pagina 3</li>
                        <li>Pagina 4</li>
                    </ul>
                </div>
            </div>
            </React.Fragment>
        );
    }

}

export default Sidebar;