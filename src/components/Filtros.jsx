import React, { useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';

const Filtros = () => {
  const { filtro, setFiltro } = useContext(PeliculasContext);

  return (
    <input
      type="text"
      placeholder="Buscar por título o género"
      className="w-full mb-4 p-2 border rounded"
      value={filtro}
      onChange={(e) => setFiltro(e.target.value)}
    />
  );
};

export default Filtros;
