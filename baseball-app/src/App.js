import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
      const [strikes, setStrikes] = useState(0);
      const [hit, setHit] = useState(0);
      const [fouls, setFouls] = useState(0);

  return (
    <div className="App">
      <h1>Batter Up!</h1>
      <h2>IT'S BASEBALL TIME</h2>
      <Display 
        balls={balls} 
        strikes={strikes} 
      />
      <Dashboard 
        balls={balls} 
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
        hit={hit}
        setHit={setHit}
        fouls={fouls}
        setFouls={setFouls} 
      />
    </div>
  );
}

export default App;
