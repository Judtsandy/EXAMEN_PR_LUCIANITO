import React from 'react';
import { PeliculasProvider } from './context/PeliculasContext';
import Formulario from './components/Formulario';
import ListaPeliculas from './components/ListaPeliculas';
import ListaFavoritos from './components/ListaFavoritos';
import Filtros from './components/Filtros';

const App = () => {
  return (
    <PeliculasProvider>
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-center">ººPelíssºº</h1>
        <Formulario />
        <Filtros />
        <ListaPeliculas />
        <ListaFavoritos />
      </div>
    </PeliculasProvider>
  );
};

export default App;