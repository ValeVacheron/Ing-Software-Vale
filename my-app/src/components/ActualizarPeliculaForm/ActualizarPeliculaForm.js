import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./ActualizarPeliculaForm.css";


function ActualizarPeliculaForm({ onActualizarPelicula, peliculas}) {

    const navigate = useNavigate('');

    const [targetId, setTargetId] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoGenero, setNuevoGenero] = useState('');
    const [nuevoDuracion, setNuevoDuracion] = useState('');
    const [nuevoInventario, setNuevoInventario] = useState('');

    function idHandler(event) {
        setTargetId(event.target.value);
    }

    function nombreHandler(event) {
        setNuevoNombre(event.target.value);
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

    function obtenerClientePorId(id) {
        const pelicula = peliculas.find(pelicula => pelicula.id === parseInt(id));

        return pelicula || null;
    }


    function submitHandler(event) {
        event.preventDefault();

        const usuarioTarget = obtenerClientePorId(targetId);

        if(usuarioTarget){
            const postData = {
                id: parseInt(targetId),
                nombre: nuevoNombre || usuarioTarget.nombre,
                genero: nuevoGenero || usuarioTarget.genero,
                duracion: nuevoDuracion || usuarioTarget.duracion,
                inventario: nuevoInventario || usuarioTarget.inventario
            };
    
            onActualizarPelicula(postData);
        } else {
            console.log("Pelicula no encontrada");
        }

        navigate('/peliculas');
    }


    return (
        <div className='centro'>
          <form className="formulariocliente" onSubmit={submitHandler}>
            <label htmlFor="id">ID de la película a actualizar:</label>
            <input type="number" name="id" id="id" value={targetId} onChange={idHandler} required />
            <br />
            <label htmlFor="name">Ingrese el nuevo título:</label>
            <input type="text" name="name" id="name" value={nuevoNombre} onChange={nombreHandler} />
            <br />
            <label htmlFor="ap_pat">Ingrese el nuevo género:</label>
            <input type="text" name="ap_pat" id="ap_pat" value={nuevoGenero} onChange={apellidoPatHandler} />
            <br />
            <label htmlFor="ap_mat">Ingrese la nueva duración:</label>
            <input type="number" name="ap_mat" id="ap_mat" value={nuevoDuracion} onChange={apellidoMatHandler} min={30}/>
            <br />
            <label htmlFor="super_user">Ingrese el nuevo inventario</label>
            <input type="number" name="super_user" id="super_user" value={nuevoInventario} onChange={superUserHandler} min={0} />

            <br />
            <button type="submit">Actualizar usuario</button>
          </form>
        </div>
      );
}

export default ActualizarPeliculaForm;