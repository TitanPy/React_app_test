import React, {Component} from 'react';
import MensajeEstatico from './sample/MensajeEstatico';

class MiComponente2 extends Component{
    render(){
        return(
            <React.Fragment>
                <h4>Soy MiComponente2</h4>
                <MensajeEstatico />
            </React.Fragment>
        );
    }
}

export default MiComponente2;