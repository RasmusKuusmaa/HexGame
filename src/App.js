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
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    setGuesses(['#323099'])
    setGuesses((prevGuesses) => [...prevGuesses, '#432432'])  
  }, [])

  return (
    <div>
      <Test />
      <h1>{color}</h1>
      <div className='boxStyle' style={{ backgroundColor: color }}></div>
  
      <button onClick={() => setChances(chances - 1)}> Guess</button>
      <div className='guessBoxContainer'>
        <h1>Tries left: {chances}</h1>
        {guesses.map((guess, guessIndex) => {
          const splittedGuess = guess.slice(1).split('');
          return (
            <div key={guessIndex} className="guessBox">
              {splittedGuess.map((char, index) => (
                <div
                  key={index}
                  className='guessBoxChar'
                  id={color.slice(1)[index] === char ? 'correct' : 'incorrect'}
                >
                  {char}
                </div>
              ))}
            </div>
          );
        })}
      </div>
   
      <div className='guessBox'></div>
      
    </div>
  );
}

export default App;