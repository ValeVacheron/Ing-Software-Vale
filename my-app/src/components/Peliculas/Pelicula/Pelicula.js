import React from "react";

import './Pelicula.css';
 
const Pelicula = ({pelicula}) => {
    return (
        <div className='alumnos'>
            <div className="alumno__description">
                <h2>{pelicula.id}</h2>
                <h2>{pelicula.nombre}</h2>
                <h2>{pelicula.genero}</h2>
                <h2>{pelicula.duracion}</h2>
                <h2>{pelicula.inventario}</h2>
            </div>
        </div>
    );
}

export default Pelicula