import React from "react";
import {Link} from "react-router-dom";

import './Inicio.css';

const Inicio = (props) => {
    return (
        <div>
            <header>
    <h1 class="titulo">Inicio</h1>
  </header>
        <div className="centro">
            
            <ul>
                <li className="boton-li"> <Link to= '/clientes'>
                    <button className="boton">Clientes</button> {/* Aplica el estilo del botón */}
                     </Link> </li>
                <li className="boton-li"><Link to= '/rentas'>
                    <button className="boton">Rentas</button> {/* Aplica el estilo del botón */}
                    </Link></li>
                <li className="boton-li"><Link to= '/peliculas'>
                    <button className="boton">Peliculas</button> {/* Aplica el estilo del botón */}
                    </Link></li>
            </ul>
        
        </div>
        </div>
        
    )
}

export default Inicio;