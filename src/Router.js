import React,{Component} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import MiComponente from './components/sample/MiComponente';
import MiComponente2 from './components/sample/MiComponente2';
import Peliculas from './components/sample/Peliculas';
import Error from './components/sample/Error';

class Router extends Component{
    render() {
        return(
            <BrowserRouter>
                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    {/* AQUI IRAN TODAS LAS RUTAS */}
                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={MiComponente} />
                    <Route exact path="/segunda-ruta" component={MiComponente2} />
                    <Route exact path="/pagina-1"  render={()=> (
                        <h1>Hola mundo</h1>
                    )} />



                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }

}


export default Router;