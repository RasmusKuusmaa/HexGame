import { useState, useEffect } from 'react';
import './App.css';

function Test() {
  return (
    <h1>HEX code generator</h1>
  )
}




function App() {
  const [color, setColor] = useState('#444444');
  const [chances, setChances] = useState(5);
  
  const guess = '#dd2345'
  const splittedGuess = guess.slice(1).split('');

  return (
    <div>
      <Test />
      <h1>{color}</h1>
      <div className='boxStyle' style={{ backgroundColor: color }}></div>
  
      <button onClick={() => setChances(chances - 1)}> Guess</button>
      <div className='guessBoxContainer'>
        <h1>Tries left: {chances}</h1>
        <div className='guessBox'>
          {splittedGuess.map((char, index) => (
            
            <div key={index} className='guessBoxChar' 
            id={color[index + 1] === char ? 'correct' : 'incorrect'}
            >
              {char}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;