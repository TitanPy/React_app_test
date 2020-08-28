import React, { Component } from 'react';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula,this.props.indice);
    }
    render(){
        const{titulo,image} = this.props.pelicula;

        return(
            <article className="article-item article-detail">
            <div className="image-wrap">
                <img src={image} alt={titulo} />
            </div>
            <h2>{titulo}</h2>
            <span>Hace 5 minutos</span><br />
            <button onClick={this.marcar}>
                Marcar como favorita
            </button>

            <div className="clearfix"></div>
        </article>
        );
    }
}
export default Pelicula;