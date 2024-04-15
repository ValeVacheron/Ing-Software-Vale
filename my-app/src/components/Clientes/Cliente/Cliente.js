import React from "react";

import './Cliente.css';
 
const Cliente = ({cliente}) => {
    return (
        <div className='alumnos'>
            <div className="alumno__description">
                <h2>{cliente.id}</h2>
                <h2>{cliente.nombre}</h2>
                <h2>{cliente.apPat}</h2>
                <h2>{cliente.apMat}</h2>
                <h2>{cliente.email}</h2>
                <h2>{cliente.superUser}</h2>
            </div>
        </div>
    );
}

export default Cliente