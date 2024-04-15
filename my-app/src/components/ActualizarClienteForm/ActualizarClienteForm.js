import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./ActualizarClienteForm.css";


function ActualizarClienteForm({ onActualizarCliente, clientes }) {

    const navigate = useNavigate('');

    const [targetId, setTargetId] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoApPat, setNuevoApPat] = useState('');
    const [nuevoApMat, setNuevoApMat] = useState('');
    const [nuevoPassword, setNuevoPassword] = useState('');
    const [nuevoEmail, setNuevoEmail] = useState('');
    const [isSuperUser, setIsSuperUser] = useState('');

    function idHandler(event) {
        setTargetId(event.target.value);
    }

    function nombreHandler(event) {
        setNuevoNombre(event.target.value);
    }
    
    function apellidoPatHandler(event) {
        setNuevoApPat(event.target.value);
    }
    
    function apellidoMatHandler(event) {
        setNuevoApMat(event.target.value);
    }
    
    function passwordHandler(event) {
        setNuevoPassword(event.target.value);
    }
    
    function emailHandler(event) {
        setNuevoEmail(event.target.value);
    }

    function superUserHandler(event) {
        setIsSuperUser(event.target.value);
    }

    function obtenerClientePorId(id) {
        const cliente = clientes.find(cliente => cliente.id === parseInt(id));

        return cliente || null;
    }


    function submitHandler(event) {
        event.preventDefault();

        const usuarioTarget = obtenerClientePorId(targetId);

        if(usuarioTarget){
            const postData = {
                id: parseInt(targetId),
                nombre: nuevoNombre || usuarioTarget.nombre,
                apPat: nuevoApPat || usuarioTarget.apPat,
                apMat: nuevoApMat || usuarioTarget.apMat,
                password: nuevoPassword || usuarioTarget.password,
                email: nuevoEmail || usuarioTarget.email,
                superUser: isSuperUser || usuarioTarget.superUser
            };
    
            onActualizarCliente(postData);
        } else {
            console.log("Cliente no encontrado");
        }

        navigate('/clientes');
    }


    return (
        <div className='centro'>
          <form className="formulariocliente" onSubmit={submitHandler}>
            <label htmlFor="id">Ingrese el ID del usuario a actualizar:</label>
            <input type="number" name="id" id="id" value={targetId} onChange={idHandler} required />
            <br />
            <label htmlFor="name">Ingrese el nuevo nombre:</label>
            <input type="text" name="name" id="name" value={nuevoNombre} onChange={nombreHandler} />
            <br />
            <label htmlFor="ap_pat">Ingrese el nuevo apellido paterno:</label>
            <input type="text" name="ap_pat" id="ap_pat" value={nuevoApPat} onChange={apellidoPatHandler} />
            <br />
            <label htmlFor="ap_mat">Ingrese el nuevo apellido materno:</label>
            <input type="text" name="ap_mat" id="ap_mat" value={nuevoApMat} onChange={apellidoMatHandler} />
            <br />
            <label htmlFor="password">Ingrese la nueva contraseña:</label>
            <input type="password" name="password" id="password" value={nuevoPassword} onChange={passwordHandler} />
            <br />
            <label htmlFor="email">Ingrese el nuevo correo electrónico:</label>
            <input type="text" name="email" id="email" value={nuevoEmail} onChange={emailHandler} />
            <br />
            <label htmlFor="super_user">¿Es super usuario?</label>
            <select name="super_user" id="super_user" value={isSuperUser} onChange={superUserHandler}>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
            <br />
            <button type="submit">Actualizar usuario</button>
          </form>
        </div>
      );
}

export default ActualizarClienteForm;