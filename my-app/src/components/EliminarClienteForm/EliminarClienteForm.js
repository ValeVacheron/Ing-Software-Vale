import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./EliminarClienteForm.css";

function EliminarClienteForm({ onEliminarCliente }) {
    const navigate = useNavigate();
  const [idCliente, setIdCliente] = useState('');

  const handleChange = (event) => {
    setIdCliente(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEliminarCliente(parseInt(idCliente));
    navigate("/clientes");
  };

  return (
    
    <div className='centro'>
    <form className="formulariocliente" onSubmit={handleSubmit}>
        <div>
          <label>ID del cliente a eliminar:</label>
          <input
            type="number"
            value={idCliente}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Eliminar Cliente</button>
        </div>
      
    </form>
    </div>
  );
}

export default EliminarClienteForm;