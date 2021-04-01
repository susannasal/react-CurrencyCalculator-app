import { useState } from 'react';
import './App.css';

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const conversion = eur * 0.9;
    setGbp(conversion);

  }

  return (
    <div className="container">
      <form onSubmit={calculate}>
        <h3>Currency conversion from eur to gbp</h3>
        <div>
          <label>Eur</label>
          <input type="number" step="0.01" value= {eur} onChange={e => setEur(e.target.value)} />
        </div>
        <div>
          <label>Gbp</label>
          <output> {gbp} </output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
