import React, { useContext } from 'react';
import { PeliculasContext } from '../context/PeliculasContext';

const ListaFavoritos = () => {
  const { peliculas } = useContext(PeliculasContext);
  const favoritas = peliculas.filter((p) => p.favorita);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Películas Favoritas</h2>
      {favoritas.map((p) => (
        <div key={p.id} className="border p-3 rounded mb-2 bg-green-100">
          <p className="font-bold">{p.titulo}</p>
          <p>{p.descripcion} - <em>{p.genero}</em></p>
        </div>
      ))}
    </div>
  );
};

export default ListaFavoritos;