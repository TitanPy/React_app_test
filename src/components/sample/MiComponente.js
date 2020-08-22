import React,{Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'pizza',
            ingredientes: ['queso','carne','champiñon'],
            calorias: 500

        };
        return(
            <React.Fragment>
                <h1>{receta.nombre}</h1>
                <h2>{receta.calorias}</h2>
                <ol>
                    { 
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return(<li key={i}>{ingrediente}</li>)
                        })
                    }
                </ol>
            </React.Fragment>
            
        );
    }
}

export default MiComponente;