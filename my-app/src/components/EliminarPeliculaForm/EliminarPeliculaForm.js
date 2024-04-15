import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./EliminarPeliculaForm.css";

function EliminarPeliculaForm({ onEliminarPelicula }) {
    const navigate = useNavigate();
    const [idPelicula, setIdPelicula] = useState('');

  const handleChange = (event) => {
    setIdPelicula(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEliminarPelicula(parseInt(idPelicula));
    navigate("/peliculas");
  };

  return (
    
    <div className='centro'>
    <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label>ID de la pelicula a eliminar:</label>
          <input
            type="number"
            value={idPelicula}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Eliminar Pelicula</button>
        </div>
      
    </form>
    </div>
  );
}

export default EliminarPeliculaForm;