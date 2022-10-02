import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(18);
  const [upper, setUpper] = useState(172);
  const [lower, setLower] = useState(131);

  function calculateHRL() {
    setUpper( (220 - age) * 0.85 )
    setLower( (220 - age) * 0.65 )
  }
  
  return (
    <div className="bg">
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age </label>
        </div>
        <div>
          <input type="text" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits </label>
        </div>
        <div>
          <output>{lower.toFixed(0)} - {upper.toFixed(0)}</output>
        </div>
        <button type="button" onClick={calculateHRL}>Calculate</button>
      </form>
    </div>

  );
}

export default App;
