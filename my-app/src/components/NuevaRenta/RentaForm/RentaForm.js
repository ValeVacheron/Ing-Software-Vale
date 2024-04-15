import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RentaForm.css";

const RentaForm = (props) => {
  const navigate = useNavigate();
  const [idclienteIngresado, setIdclienteIngresado] = useState("");
  const [idpeliculaIngresado, setIdpeliculaIngresado] = useState("");
  const [fecha_rentaIngresado, setFecha_rentaIngresado] = useState("");
  const [dias_de_rentaIngresado, setDias_de_rentaIngresado] = useState("");
  const [estatusIngresado, setEstatusIngresado] = useState("");

  const cambioNombreHandler = (event) => {
    setIdclienteIngresado(event.target.value);
  };

  const cambioApPatHandler = (event) => { 
    setIdpeliculaIngresado(event.target.value);
  };

  const cambioApMatHandler = (event) => { 
    setFecha_rentaIngresado(event.target.value);
  };

  const cambioEmailHandler = (event) => { 
    setDias_de_rentaIngresado(event.target.value);
  };

  const cambioPasswordHandler = (event) => { 
    setEstatusIngresado(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const renta = {
      idcliente: idclienteIngresado,
      idpelicula: idpeliculaIngresado,
      fecha_renta: fecha_rentaIngresado,
      dias_de_renta: dias_de_rentaIngresado,
      estatus: estatusIngresado,
    };
    if (
      idclienteIngresado === "" ||
      idpeliculaIngresado === "" ||
      fecha_rentaIngresado === "" ||
      dias_de_rentaIngresado === "" ||
      estatusIngresado === ""
    ) {
      alert("Campos vacíos!!");
      return;
    }

    props.onGuardarRenta(renta);
    setIdclienteIngresado("");
    setIdpeliculaIngresado("");
    setFecha_rentaIngresado("");
    setDias_de_rentaIngresado("");
    setEstatusIngresado("");

    navigate("/rentas");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="nuevo-alumno__controls">
        <div className="nuevo-alumno__control">
          <label>Id Cliente: </label>
          <input
            type="number"
            value={idclienteIngresado}
            onChange={cambioNombreHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Id Pelicula: </label>
          <input
            type="number"
            value={idpeliculaIngresado}
            onChange={cambioApPatHandler}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Fecha de renta: </label>
          <input
                        type="date"
                        value={fecha_rentaIngresado}
                        onChange={cambioApMatHandler}
                        max={new Date().toISOString().split('T')[0]}
            />
        </div>
        <div className="nuevo-alumno__control">
          <label>Dias de renta: </label>
          <input
            type="number"
            value={dias_de_rentaIngresado}
            onChange={cambioEmailHandler}
            min={0}
          />
        </div>
        <div className="nuevo-alumno__control">
          <label>Estatus: </label>
          <input
            type="number"
            value={estatusIngresado}
            onChange={cambioPasswordHandler}
            max={1}
            min={0}
          />
        </div>
        <div className="nuevo-alumno__actions">
          <button type="submit">Agregar Renta</button>
        </div>
      </div>
    </form>
  );
};

export default RentaForm;
