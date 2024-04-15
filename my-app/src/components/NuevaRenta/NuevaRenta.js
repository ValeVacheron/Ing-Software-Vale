import React from "react";

import './NuevaRenta.css';
import RentaForm from "./RentaForm/RentaForm";

const NuevaRenta = (props) => {
    
    const guardaRentaHandler = (rentaIngresado) => {
        const rentas = { 
            ...rentaIngresado
        };
        props.onAgregarRenta(rentas);
    };


    return (
        <div className="nuevo-alumno">
            <RentaForm onGuardarRenta={guardaRentaHandler} />
        </div>
    )
}

export default NuevaRenta; 