import './App.css';
import { useState } from 'react';
import axios from 'axios';


const URL = 'https://api.exchangerate.host/latest';
const API_KEY = '911b3806a1cbe40dacf96b52c007b3f3';

function App() {
const  [eur,setEur] = useState(0);
const  [gbp,setGbp] = useState(0);
const  [rate,setRate] = useState(0);

async function convert(e) {
  e.preventDefault();
  try {
    const address = URL;
    const response = await fetch(address);

    if (response.ok) {
      const json = await response.json();
      setRate(json.rates.GBP)
      setGbp(eur * json.rates.GBP);
    } else {
      alert('Error retrieving exchange rate.');
      console.log(response);
    }
  } catch (err) {
    alert(err);
  }
}


  return (
    <div id="container">
      <form onSubmit={convert}>
      <div>
          <label>Eur</label>&nbsp;
          <input type="number" step="0.01"
          value={eur} onChange={e => setEur(e.target.value)} />
          <output>{rate}</output>
        </div>

        <div>
          <label>Gbp</label>
          <output>{gbp.toFixed(2)} € </output>
        </div>

        <div>
          <button>Calculate</button>
        </div>
        </form>
        
    </div>
  );

  
}


export default App;

