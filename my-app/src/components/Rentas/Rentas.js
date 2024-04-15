import React from "react";

import {Link} from "react-router-dom";

import Card from '../UI/Card';
import Renta from "./Renta/Renta";
import './Rentas.css';

const Rentas = ({rentas}) => {   
    return ( 
        <div>
             <Card className='alumnos'>
             <ul>
                        {rentas.map(renta => (
                            <Renta key={renta.id} renta={renta} />
                        ))}
                </ul>
        
            </Card>
        
            <div className="centroboton">
                    <Link to= '/rentas/agregar'>
                    <button className="botonagregar">Agregar Renta</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/rentas/actualizar'>
                    <button className="botonactualizar">Actualizar Renta</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/'>
                    <button className="botonvolver">Volver al inicio</button> {/* Aplica el estilo del botón */}
                    </Link>
                    
            </div>
        </div> 
    )
};

export default Rentas;