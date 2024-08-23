import { useState, useEffect } from 'react';
import './App.css';

function Test() {
  return (
    <h1>HEX code generator</h1>
  );
}

function generateHex() {
  const elements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const item = elements[Math.floor(Math.random() * 16)];
    hex += item;
  }
  return hex;
}

function GeneratingButton({ setColor, setGuesses, setChances }) {
  const handleNewGame = () => {
    const newColor = generateHex();
    setColor(newColor);
    setGuesses([]);
    setChances(5);
    };
    
    return (
      <button onClick={handleNewGame} className='RetryButton'>
        ↻
    </button>
  );
  }


function AnswerBox({ guess, setGuess, handleGuessSubmit }) {
  return (
    <form onSubmit={handleGuessSubmit} className='AnswerForm'>
      <input 
        type="text" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

function GuessBox({ guess, color }) {
  const splittedGuess = guess.split('');
  return (
    <div className="guessBox">
      {splittedGuess.map((char, index) => {
        const correctChar = color.slice(1)[index];
        let direction = '';
        if (char < correctChar) {
          direction = '↑';
        } else if (char > correctChar) {
          direction = '↓';
        }
        return (
          <div key={index} className='guessBoxChar' id={correctChar === char ? 'correct' : 'incorrect'}>
            <div>{char}</div>
            <div>{direction}</div>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [color, setColor] = useState('#4a4444');
  const [chances, setChances] = useState(5);
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState('');
  

  useEffect(() => {
    setColor(generateHex());
  }, []);

  const handleGuessClick = (e) => {
    e.preventDefault();
    console.log(guess);
    setChances(chances - 1);
    setGuesses([...guesses, guess]);
    setGuess('');
  };


  return (
    <div className='Container'>
      {/*

      
      <GeneratingButton setColor={setColor} setGuesses={setGuesses} setChances={setChances} />
      <h1>{color}</h1>
      <div className='boxStyle' style={{ backgroundColor: color }}></div>
      <AnswerBox guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessClick} />
      <button onClick={handleGuessClick}>Guess</button>
      <div className='guessBoxContainer'>
        <h1>Tries left: {chances}</h1>
        {guesses.map((guess, guessIndex) => (
          <GuessBox key={guessIndex} guess={guess} color={color} />
        ))}
      </div>
          */}
        <div className='GameContainer'>
          <div className='ColorContainer' style={{backgroundColor: color}}></div>
          <div className='ColorContainer' style={{ left: '35vw', backgroundColor: `#${guesses[guesses.length - 1]}` }}></div>
          <GeneratingButton setColor={setColor} setGuesses={setGuesses} setChances={setChances}/>
          <button className='GuessButton' onClick={handleGuessClick}>→ </button>
          <div className='AnswerBox'>
            <div style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}> #</div>
           <div>
              <AnswerBox guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessClick}/>
           </div>
            
          </div>
        </div>
        <div className='GuessContainer'>
          <h1>Tries left: {chances}</h1>
          
        </div>
     
        
    </div>
  );
}

export default App;