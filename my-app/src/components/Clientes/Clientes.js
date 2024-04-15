import React from "react";

import {Link} from "react-router-dom";

import Card from '../UI/Card';
import Cliente from "./Cliente/Cliente";
import './Clientes.css';

const Clientes = ({clientes}) => {   
    return ( 
        <div>
             <Card className='alumnos'>
             <ul>
                        {clientes.map(cliente => (
                            <Cliente key={cliente.id} cliente={cliente} />
                        ))}
                </ul>
        
            </Card>
        
            <div className="centroboton">
                    <Link to= '/clientes/eliminar'>
                    <button className="botoneliminar">Eliminar Cliente</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/clientes/agregar'>
                    <button className="botonagregar">Agregar Cliente</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/clientes/actualizar'>
                    <button className="botonactualizar">ActualizarCliente</button> {/* Aplica el estilo del botón */}
                    </Link>
                    <Link to= '/'>
                    <button className="botonvolver">Volver al inicio</button> {/* Aplica el estilo del botón */}
                    </Link>
                    
            </div>
        </div> 
    )
};

export default Clientes;