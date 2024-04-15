import React from "react";

import './Renta.css';
 
const Renta = ({renta}) => {
    return (
        <div className='alumnos'>
            <div className="alumno__description">
                <h2>{renta.idrenta}</h2>
                <h2>{renta.idcliente}</h2>
                <h2>{renta.idpelicula}</h2>
                <h2>{renta.fecha_renta}</h2>
                <h2>{renta.dias_de_renta}</h2>
                <h2>{renta.estatus}</h2>
            </div>
        </div>
    );
}

export default Renta;