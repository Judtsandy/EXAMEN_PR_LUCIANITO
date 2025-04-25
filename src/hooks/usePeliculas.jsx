// hooks/usePeliculas.js
import { useState, useEffect } from 'react';

const usePeliculas = () => {
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem('peliculas');
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  const agregarPelicula = (pelicula) => {
    setPeliculas([...peliculas, { ...pelicula, id: Date.now(), favorita: false }]);
  };

  const eliminarPelicula = (id) => {
    setPeliculas(peliculas.filter((p) => p.id !== id));
  };

  const toggleFavorito = (id) => {
    setPeliculas(
      peliculas.map((p) =>
        p.id === id ? { ...p, favorita: !p.favorita } : p
      )
    );
  };

  return {
    peliculas,
    agregarPelicula,
    eliminarPelicula,
    toggleFavorito,
    filtro,
    setFiltro
  };
};

export default usePeliculas;