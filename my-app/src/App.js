import React, { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./App.css";

import Alumnos from "./components/Alumnos/Alumnos";
import NuevoAlumno from "./components/NuevoAlumno/NuevoAlumno";

import Inicio from "./components/Inicio/Inicio";

import Clientes from "./components/Clientes/Clientes";
import NuevoCliente from "./components/NuevoCliente/NuevoCliente";
import EliminarClienteForm from "./components/EliminarClienteForm/EliminarClienteForm";
import ActualizarClienteForm from "./components/ActualizarClienteForm/ActualizarClienteForm";

import Peliculas from "./components/Peliculas/Peliculas";
import NuevaPelicula from "./components/NuevaPelicula/NuevaPelicula";
import EliminarPeliculaForm from "./components/EliminarPeliculaForm/EliminarPeliculaForm";

import Rentas from "./components/Rentas/Rentas";
import NuevaRenta from "./components/NuevaRenta/NuevaRenta";
import ActualizarPeliculaForm from "./components/ActualizarPeliculaForm/ActualizarPeliculaForm";
import ActualizarRentaForm from "./components/ActualizarRentaForm/ActualizarRentaForm";

function App() {
  
  const [peliculas, setPeliculas] = useState([
    {
      id: 1,
      nombre: "About Time",
      genero: "Romance",
      duracion: "120",
      inventario: 4
    },
    {
      id: 2,
      nombre: "Spider-Man",
      genero: "Acción",
      duracion: "120",
      inventario: 5
    },
    {
      id: 3,
      nombre: "Saltburn",
      genero: "???",
      duracion: "120",
      inventario: 6
    },
  ]);

  const [alumnos, setAlumnos] = useState([
    {
      nombre: "Fernando",
      apellido: "Fong",
      numCta: 313320679,
    },
    {
      nombre: "Valeria",
      apellido: "Garcia",
      numCta: 314006088,
    },
    {
      nombre: "Erick",
      apellido: "Martinez",
      numCta: 414890123,
    },
  ]);

  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: "Nadin",
      apPat: "Vacheron",
      apMat: "Martínez",
      email: "n.vacheron@gmail.com",
      password: "123",
      superUser: 0
    },
    {
      id: 2,
      nombre: "Valeria",
      apPat: "Ramirez",
      apMat: "Vacheron",
      email: "vvacherone@gmail.com",
      password: "12345",
      superUser: 0
    },
    {
      id: 3,
      nombre: "Moises",
      apPat: "Novoa",
      apMat: "Hernandez",
      email: "moi@gmail.com",
      password: "ganamoi",
      superUser: 1
    },
  ]);

  const [rentas, setRentas] = useState([
    {
      idrenta: 1,
      idcliente: 1,
      idpelicula: 1,
      fecha_renta: "2024-04-11",
      dias_de_renta: 20,
      estatus: 0
    },
    {
      idrenta: 2,
      idcliente: 2,
      idpelicula: 2,
      fecha_renta: "2024-04-12",
      dias_de_renta: 2,
      estatus: 0
    },
    {
      idrenta: 3,
      idcliente: 3,
      idpelicula: 3,
      fecha_renta: "2024-04-13",
      dias_de_renta: 13,
      estatus: 0
    },
  ]);

  const agregarAlumno = (alumno) => {
    const nuevoAlumno = [alumno, ...alumnos];
    setAlumnos(nuevoAlumno);
    console.log(nuevoAlumno);
  };

  const agregarCliente = (cliente) => {
    const nuevoCliente = [cliente, ...clientes];
    setClientes(nuevoCliente);
    console.log(nuevoCliente);
  };

  const eliminarCliente = (idCliente) => {
    setClientes(clientes.filter(cliente => cliente.id !== idCliente));
  };

  function actualizarCliente(updatedClient) {
    setClientes((cliente) =>
        clientes.map((cliente) =>
            cliente.id === updatedClient.id ? { ...cliente, ...updatedClient } : cliente
        )
    );
  }

  const agregarRenta = (renta) => {
    const nuevaRenta = [renta, ...rentas];
    setRentas(nuevaRenta);
    console.log(nuevaRenta);
  };

  const agregarPelicula = (pelicula) => {
    const nuevaPelicula = [pelicula, ...peliculas];
    setPeliculas(nuevaPelicula);
    console.log(nuevaPelicula);
  };

  const eliminarPelicula = (idPelicula) => {
    setPeliculas(peliculas.filter(pelicula => pelicula.id !== idPelicula));
  };

  function actualizarPelicula(updatedPelicula) {
    setPeliculas((pelicula) =>
        peliculas.map((pelicula) =>
            pelicula.id === updatedPelicula.id ? { ...pelicula, ...updatedPelicula } : pelicula
        )
    );
  }

  function actualizarRenta(updatedRenta) {
    setRentas((renta) =>
        rentas.map((renta) =>
        renta.idrenta === updatedRenta.idrenta ? { ...renta, ...updatedRenta } : renta
        )
    );
  }

  return (
    <BrowserRouter>
      <Routes>      
      <Route path="/" element={<Inicio />} />
      <Route path="/rentas" element={<Rentas rentas={rentas} />} />
      <Route path="/rentas/agregar" element={<NuevaRenta onAgregarRenta={agregarRenta}/>} />
      <Route path="/rentas/actualizar" element={<ActualizarRentaForm onActualizarRenta={actualizarRenta} rentas={rentas}/>} />


      <Route path="/peliculas" element={<Peliculas peliculas={peliculas} />} />
      <Route path="/peliculas/agregar" element={<NuevaPelicula onAgregarPelicula={agregarPelicula}/>} />
      <Route path="/peliculas/eliminar" element={<EliminarPeliculaForm onEliminarPelicula= {eliminarPelicula} />} />
      <Route path="/peliculas/actualizar" element={<ActualizarPeliculaForm onActualizarPelicula= {actualizarPelicula} peliculas = {peliculas} />} />


      <Route path="/clientes" element={<Clientes clientes = {clientes}/> } />
      <Route path="/clientes/agregar" element={<NuevoCliente onAgregarCliente = {agregarCliente} />} />
      <Route path="/clientes/eliminar" element={<EliminarClienteForm onEliminarCliente= {eliminarCliente} />} />
      <Route path="/clientes/actualizar" element={<ActualizarClienteForm clientes = {clientes} onActualizarCliente= {actualizarCliente} />} />
      
      <Route path="/alumnos" element={<Alumnos alumnos = {alumnos}/>} />
      <Route path="/alumnos/agregar" element={<NuevoAlumno onAgregarAlumno= {agregarAlumno} />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
