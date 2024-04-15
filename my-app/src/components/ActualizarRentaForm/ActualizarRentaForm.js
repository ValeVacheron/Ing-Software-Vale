import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./ActualizarRentaForm.css";


function ActualizarRentaForm({ onActualizarRenta, rentas}) {

    const navigate = useNavigate('');

    const [targetId, setTargetId] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoIdCliente, setIdCliente] = useState('');
    const [nuevoGenero, setNuevoGenero] = useState('');
    const [nuevoDuracion, setNuevoDuracion] = useState('');
    const [nuevoInventario, setNuevoInventario] = useState('');

    function idHandler(event) {
        setTargetId(event.target.value);
    }

    function nombreHandler(event) {
        setNuevoNombre(event.target.value);
    }
    
    function idclienteHandler(event) {
        setIdCliente(event.target.value);
    }

    function apellidoPatHandler(event) {
        setNuevoGenero(event.target.value);
    }

    function apellidoMatHandler(event) {
        setNuevoDuracion(event.target.value);
    }

    function superUserHandler(event) {
        setNuevoInventario(event.target.value);
    }

    function obtenerClientePorId(idrenta) {
        const renta = rentas.find(renta => renta.idrenta === parseInt(idrenta));

        return renta || null;
    }


    function submitHandler(event) {
        event.preventDefault();

        const usuarioTarget = obtenerClientePorId(targetId);

        if(usuarioTarget){
            const postData = {
                idrenta: parseInt(targetId),
                idcliente: nuevoIdCliente||usuarioTarget.idcliente,
                idpelicula: nuevoNombre || usuarioTarget.nombre,
                fecha_renta: nuevoGenero || usuarioTarget.genero,
                dias_de_renta: nuevoDuracion || usuarioTarget.duracion,
                estatus: nuevoInventario || usuarioTarget.inventario
            };
    
            onActualizarRenta(postData);
        } else {
            console.log("Renta no encontrada");
        }

        navigate('/rentas');
    }


    return (
        <div className='centro'>
          <form className="formulariocliente" onSubmit={submitHandler}>
            <label htmlFor="id">ID de la renta a actulizar:</label>
            <input type="number" name="id" id="id" value={targetId} onChange={idHandler} required />
            <br />
            <label htmlFor="name">ID del cliente:</label>
            <input type="number" name="name" id="name" value={nuevoIdCliente} onChange={idclienteHandler} />
            <br />
            <label htmlFor="name">ID de la pelicula:</label>
            <input type="number" name="name" id="name" value={nuevoNombre} onChange={nombreHandler} />
            <br />
            <label htmlFor="ap_pat">Ingrese la nueva fecha de renta:</label>
            <input type="date" name="ap_pat" id="ap_pat" value={nuevoGenero} onChange={apellidoPatHandler} />
            <br />
            <label htmlFor="ap_mat">Ingrese los nuevos días de renta:</label>
            <input type="number" name="ap_mat" id="ap_mat" value={nuevoDuracion} onChange={apellidoMatHandler} min={0} />
            <br />
            <label htmlFor="super_user">Ingrese el estatus</label>
            <input type="number" name="super_user" id="super_user" value={nuevoInventario} onChange={superUserHandler}min={0}
            max={1}/>

            <br />
            <button type="submit">Actualizar usuario</button>
          </form>
        </div>
      );
}

export default ActualizarRentaForm;