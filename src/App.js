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
  const [color, setColor] = useState('#4a4444');
  const [chances, setChances] = useState(5);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    setGuesses(['09a099'])
    setGuesses((prevGuesses) => [...prevGuesses, '432432'])
  }, [])

  useEffect(() => {
    generateHex(setColor)
  }, [])

  return (
    <div>
      <Test />
      <h1>{color}</h1>
      <div className='boxStyle' style={{ backgroundColor: color }}></div>
      <GeneratingButton setColor={setColor} />
      <button onClick={() => setChances(chances - 1)}> Guess</button>
      <div className='guessBoxContainer'>
        <h1>Tries left: {chances}</h1>
        {guesses.map((guess, guessIndex) => {
          const splittedGuess = guess.split('');
          return (
            <div key={guessIndex} className="guessBox">
              {splittedGuess.map((char, index) => {
                const correctChar = color.slice(1)[index];
                let direction = '';
                if (char < correctChar) {
                  direction = '↑';
                }
                else if (char > correctChar) {
                  direction = '↓';
                }
                return (
                  <div key={index} className='guessBoxChar' id={correctChar === char ? 'correct' : 'incorrect'}>
                    <div >
                      {char}
                    </div>
                    <div>{direction}</div>
                  </div>
                );

              })}
            </div>
          );
        })}
      </div>
   
      
    </div>
  );
}

export default App;
