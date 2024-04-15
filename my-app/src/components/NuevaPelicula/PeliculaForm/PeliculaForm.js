import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PeliculaForm.css";

const PeliculaForm = (props) => {
  const navigate = useNavigate();
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [generoIngresado, setGeneroIngresado] = useState("");
  const [duracionIngresado, setDuracionIngresado] = useState("");
  const [inventarioIngresado, setInventarioIngresado] = useState("");

  const cambioNombreHandler = (event) => {
    setNombreIngresado(event.target.value);
  };

  const cambioApPatHandler = (event) => { 
    setGeneroIngresado(event.target.value);
  };

  const cambioApMatHandler = (event) => { 
    setDuracionIngresado(event.target.value);
  };

  const cambioSuperUserHandler = (event) => { 
    setInventarioIngresado(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const pelicula = {
      nombre: nombreIngresado,
      genero: generoIngresado,
      duracion: duracionIngresado,
      inventario: inventarioIngresado,
    };
    
    if (
      nombreIngresado === "" ||
      generoIngresado === "" ||
      duracionIngresado === "" ||
      inventarioIngresado===""
    ) {
      alert("Campos vacíos!!");
      return;
    }

    props.onGuardarPelicula(pelicula);
    setNombreIngresado("");
    setGeneroIngresado("");
    setDuracionIngresado("");
    setInventarioIngresado("");

    
    navigate("/peliculas");
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
          <label>Genero: </label>
          <input
            type="text"
            value={generoIngresado}
            onChange={cambioApPatHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Duracion: </label>
          <input
            type="number"
            value={duracionIngresado}
            onChange={cambioApMatHandler}
            min={30}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Inventario: </label>
          <input
            type="number"
            value={inventarioIngresado}
            onChange={cambioSuperUserHandler}
            min={0}
          />
        </div>
        <div className="nuevo-alumno__actions">
          <button type="submit">Agregar Pelicula</button>
        </div>
      </div>
    </form>
  );
};

export default PeliculaForm;
