import React, { useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';

const ListaPeliculas = () => {
  const { peliculas, eliminarPelicula, toggleFavorito, filtro } = useContext(PeliculasContext);

  const filtradas = peliculas.filter(
    (p) =>
      p.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      p.genero.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 ">Todas las Películas</h2>
      {filtradas.map((p) => (
        <div key={p.id} className="border p-3 rounded mb-2 bg-white shadow">
          <p className="font-bold">{p.titulo}</p>
          <p>{p.descripcion} - <em>{p.genero}</em></p>
          <div className="space-x-2 mt-2">
            <button onClick={() => eliminarPelicula(p.id)} className="px-2 py-1 bg-red-500 text-white rounded">Eliminar</button>
            <button onClick={() => toggleFavorito(p.id)} className="px-2 py-1 bg-yellow-500 text-white rounded">
              {p.favorita ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaPeliculas;