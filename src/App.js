import React, { useState } from "react";
import './App.css';
import Square from './Square.jsx';

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square 
              key={index}
              squareValue={val}
              index={index}
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
            />
          );
        })}
      </div>
      <span>{calculateWinner(squares)}</span>
    </div>
  );
};



export default App;
