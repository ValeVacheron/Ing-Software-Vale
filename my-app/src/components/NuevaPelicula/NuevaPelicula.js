import React from "react";

import './NuevaPelicula.css';
import PeliculaForm from "./PeliculaForm/PeliculaForm";

const NuevaPelicula = (props) => {
    
    const guardaPeliculaHandler = (peliculaIngresado) => {
        const peliculas = { 
            ...peliculaIngresado
        };
        props.onAgregarPelicula(peliculas);
    };

    return (
        <div className="nuevo-alumno">
            <PeliculaForm onGuardarPelicula={guardaPeliculaHandler} />
        </div>
    )
}

export default NuevaPelicula; 