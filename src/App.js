import { useState, useEffect } from 'react';
import './App.css';

function Test() {
  return (
    <h1>HEX code generator</h1>
  );
}

function generateHex() {
  const elements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
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
    const handleInputChange = (e) => {
      let val = e.target.value.toUpperCase(); 
      if (/^[0-9A-F]*$/.test(val) && val.length <= 6) {
        setGuess(val);
      }
    };
  
    return (
      <form onSubmit={handleGuessSubmit} className='AnswerForm'>
        <input 
          type="text" 
          value={guess} 
          onChange={handleInputChange}
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
    if (guess.length === 6){

      e.preventDefault();
      setChances(chances - 1);
      setGuesses([...guesses, guess]);
      setGuess('');
      
    }
  };


  return (
    <div className='Container'>
        <div className='GameContainer'>
          <h1 style={{position: 'absolute', left: '10vw', fontSize: '3vw', top: '-3vh'}}>Target</h1>
          <div className='ColorContainer' style={{backgroundColor: color}}></div>
          <h1 style={{position: 'absolute', left: '40vw', fontSize: '3vw', top: '-3vh'}}>Guess</h1>
          <div className='ColorContainer' style={{ left: '35vw', backgroundColor: `#${guesses[guesses.length - 1]}`}}></div>
          <GeneratingButton setColor={setColor} setGuesses={setGuesses} setChances={setChances}/>
          <button className='GuessButton' onClick={handleGuessClick}>→ </button>
          <div className='AnswerBox'>
          <div style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}>
            #
              </div>
              <div style={{borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>
                  <AnswerBox guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessClick} cl/>
              </div>
            
          </div>
        </div>
        <div className='GuessContainer'>
  <h1>Tries left: {chances}</h1>
  <div className="guessBoxContainer">
    {guesses.map((gues, guessIndex) => (
      <div key={guessIndex} className="guessRow">
        {gues.split('').map((char, charIndex) => {
          const correctChar = color.slice(1)[charIndex];
          let direction = '';
          let backgroundColor = '';

          if (char < correctChar) {
            direction = '↑';
            backgroundColor = 'red';
          } else if (char > correctChar) {
            direction = '↓';
            backgroundColor = 'red';
          } else {
            backgroundColor = 'green'; 
          }

          return (
            <div
              key={charIndex}
              className="numberBox"
              style={{ backgroundColor, color: '#fff' }}
            >
              <div>{char}</div>
              <div>{direction}</div>
            </div>
          );
        })}
      </div>
    ))}
  </div>
</div>

     
        
    </div>
  );
}

export default App;