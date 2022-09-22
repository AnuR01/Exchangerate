import { useState } from 'react';
import './App.css';
import {useState,useEffect } from 'react';
import axios from 'axios';

const URL = 'https://api.exchangeratesapi.io/v1/latest? access_key='
const API_KEY = '911b3806a1cbe40dacf96b52c007b3f3';

function App() {
const  [eur, setEur] = useState(0);
const  [gbp, setGbp] = useState(0);
const  [rate, setRate] = useState(0);


  return (
    <div id="container">
      <form onSubmit={convert}>
      <div>
          <label> Eur </label>&nbsp;
          <input type="number" step="0.01"
          value={eur} onChange={e => setEur(e.target.value)} />
          <output> {rate}</output>
        </div>

        <div>
          <label> Gbp </label>&nbsp;
          <output> {gbp.toFixed(2)} €</output>
        </div>

        <div>
          <button>Calculate</button>
        </div>
        </form>
        
    </div>
  );

  
}

async functionconvert(e) {
  e.preventDefaut();
  try {
    const address = URL + API_KEY;
    const response = await fetch(address);

    if (response.ok) {
      const json = await response.json()
    }
  }
}

export default App;
