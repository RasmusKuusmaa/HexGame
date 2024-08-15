import './App.css';

function Test() {
  return (
    <h1>HEX code generator</h1>
  )
}

function generateHex() {
  const elements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",]
  let hex = "#"
  for (let i = 0; i < 6; i++) {
    let item = elements[Math.floor(Math.random() * 16)];
    hex += item;
  }
  return hex
}

function App() {
  const color = generateHex()
  return (
    <div>
      <Test />
      <h1>{color}</h1>
    </div>
  );
}

export default App;
