import React from "react";

import {Link} from "react-router-dom";

import Card from '../UI/Card';
import Pelicula from "./Pelicula/Pelicula";
import './Peliculas.css';

const Peliculas = ({peliculas}) => {   
    return ( 
        <div>
             <Card className='alumnos'>
             <ul>
                        {peliculas.map(pelicula => (
                            <Pelicula key={pelicula.id} pelicula={pelicula} />
                        ))}
                </ul>
        
            </Card>
        
            <div className="centroboton">
                    <Link to= '/peliculas/eliminar'>
                    <button className="botoneliminar">Eliminar Pelicula</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/peliculas/agregar'>
                    <button className="botonagregar">Agregar Pelicula</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/peliculas/actualizar'>
                    <button className="botonactualizar">Actualizar Pelicula</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/'>
                    <button className="botonvolver">Volver al inicio</button> {/* Aplica el estilo del botón */}
                    </Link>
                    
            </div>
        </div> 
    )
};

export default Peliculas;