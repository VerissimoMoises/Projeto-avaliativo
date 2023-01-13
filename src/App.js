import React, { useState } from 'react';
import './App.css';

import Desafio from './components/Desafio'
import Numero from './components/Numero'
import Sorteio from './components/Sorteio'
import Propriedades from './components/Propriedades'
import Recesso from './components/Recesso'

function App() {

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  return (
    <div className="App">
      <h1>PROJETO AVALIATIVO REACT-REDUX 2º BIMESTRE</h1>

      <div className='linha'>
        <Desafio> </Desafio>
      </div>

      <div className='linha'>
        <Numero max={max} min={min} onMaxChanged={setMax} onMinChanged={setMin}>
        </Numero>
        <Propriedades 
        titulo='Qual dua nota?'
        aluno='Moisés Souza '
        nota='sua note é: '
        max={max}></Propriedades>
        <Sorteio min={min} max={max}></Sorteio>
        <Recesso min={min} max={max}></Recesso>
      </div>

    </div>
  );
}

export default App;
