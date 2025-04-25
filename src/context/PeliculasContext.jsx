import React, { createContext, useState } from 'react';
import usePeliculas from '../hooks/usePeliculas';

export const PeliculasContext = createContext();

export const PeliculasProvider = ({ children }) => {
  const {
    peliculas,
    agregarPelicula,
    eliminarPelicula,
    toggleFavorito,
    filtro,
    setFiltro
  } = usePeliculas();

  return (
    <PeliculasContext.Provider
      value={{ peliculas, agregarPelicula, eliminarPelicula, toggleFavorito, filtro, setFiltro }}>
      {children}
    </PeliculasContext.Provider>
  );
};
