import React, { useState, useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';

const Formulario = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');
  const { agregarPelicula } = useContext(PeliculasContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descripcion || !genero) return;
    agregarPelicula({ titulo, descripcion, genero });
    setTitulo('');
    setDescripcion('');
    setGenero('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input className="w-full p-2 border rounded" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
      <input className="w-full p-2 border rounded" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
      <input className="w-full p-2 border rounded" value={genero} onChange={(e) => setGenero(e.target.value)} placeholder="Género" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Agregar Película</button>
    </form>
  );
};

export default Formulario;