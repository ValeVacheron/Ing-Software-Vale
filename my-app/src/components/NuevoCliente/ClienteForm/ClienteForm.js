import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ClienteForm.css";

const ClienteForm = (props) => {
  const navigate = useNavigate();
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [apPatIngresado, setApPatIngresado] = useState("");
  const [apMatIngresado, setApMatIngresado] = useState("");
  const [emailIngresado, setEmailIngresado] = useState("");
  const [passwordIngresado, setPasswordIngresado] = useState("");
  const [superUserIngresado, setSuperUserIngresado] = useState("");

  const cambioNombreHandler = (event) => {
    setNombreIngresado(event.target.value);
  };

  const cambioApPatHandler = (event) => { 
    setApPatIngresado(event.target.value);
  };

  const cambioApMatHandler = (event) => { 
    setApMatIngresado(event.target.value);
  };

  const cambioEmailHandler = (event) => { 
    setEmailIngresado(event.target.value);
  };

  const cambioPasswordHandler = (event) => { 
    setPasswordIngresado(event.target.value);
  };

  const cambioSuperUserHandler = (event) => { 
    setSuperUserIngresado(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const cliente = {
      nombre: nombreIngresado,
      apPat: apPatIngresado,
      apMat: apMatIngresado,
      email: emailIngresado,
      password: passwordIngresado,
      superUser: superUserIngresado,
    };
    if (
      nombreIngresado === "" ||
      apPatIngresado === "" ||
      apMatIngresado === "" ||
      emailIngresado === "" ||
      passwordIngresado === ""||
      superUserIngresado===""
    ) {
      alert("Campos vacíos!!");
      return;
    }

    props.onGuardarCliente(cliente);
    setNombreIngresado("");
    setApPatIngresado("");
    setApMatIngresado("");
    setEmailIngresado("");
    setPasswordIngresado("");
    setSuperUserIngresado("");

    
    navigate("/clientes");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="nuevo-alumno__controls">
        <div className="nuevo-alumno__control">
          <label>Nombre: </label>
          <input
            type="text"
            value={nombreIngresado}
            onChange={cambioNombreHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Apellido Paterno: </label>
          <input
            type="text"
            value={apPatIngresado}
            onChange={cambioApPatHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Apellido Materno: </label>
          <input
            type="text"
            value={apMatIngresado}
            onChange={cambioApMatHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Email: </label>
          <input
            type="text"
            value={emailIngresado}
            onChange={cambioEmailHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Password: </label>
          <input
            type="text"
            value={passwordIngresado}
            onChange={cambioPasswordHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Super User: </label>
          <input
            type="number"
            value={superUserIngresado}
            onChange={cambioSuperUserHandler}
            min={0}
            max={1}
          />
        </div>
        <div className="nuevo-alumno__actions">
          <button type="submit">Agregar Cliente</button>
        </div>
      </div>
    </form>
  );
};

export default ClienteForm;
