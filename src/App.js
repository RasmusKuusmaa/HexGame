import { useState, useEffect } from 'react';
import './App.css';

function Test() {
  return (
    <h1>HEX code generator</h1>
  )
}

function generateHex(setColor) {
  const elements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let item = elements[Math.floor(Math.random() * 16)];
    hex += item;
  }
  setColor(hex);
}

function GeneratingButton({ setColor }) {
  return (
    <button onClick={() => generateHex(setColor)}>
      Generate new color
    </button>
  );
}

function App() {
  const [color, setColor] = useState('#444444');
  const [chanches, setChanches] = useState(5);
  useEffect(() => {
    generateHex(setColor)
  }, [])

  return (
    <div>
      <Test />
      <h1>{color}</h1>
      <div className='boxStyle' style={{ backgroundColor: color }}></div>
      <GeneratingButton setColor={setColor} />
      <button onClick={() => setChanches(chanches - 1)}> Guess</button>
      <h1>Tries left: {chanches}</h1>
    </div>
  );
}

export default App;