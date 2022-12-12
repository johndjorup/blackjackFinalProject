import React, { useState } from 'react';

const Game = () => {
  const [player, setPlayer] = useState(1);
  const [player1Total, setPlayer1Total] = useState(0);
  const [player2Total, setPlayer2Total] = useState(0);

  const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  const handleTurn = () => {
    const die1 = rollDie();
    const die2 = rollDie();
    if (player === 1) {
      setPlayer1Total(player1Total + die1 + die2);
    } else {
      setPlayer2Total(player2Total + die1 + die2);
    }
    if (player1Total >= 25 || player2Total >= 35) {
      const winner = player1Total > player2Total ? 1 : 2;
      alert(`Player ${winner} wins!`);
    } else {
      setPlayer(player === 1 ? 2 : 1);
    }
  };


  return (
    
    <div>
      <h1 style={{color: "red"}}>Player {player}'s turn</h1>
      <h5>First Player to 35 wins!</h5>
      <p>Player 1 total: {player1Total}</p>
      <p>Player 2 total: {player2Total}</p>
      <button onClick={handleTurn}>Take turn</button>
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <p style={{color: "blue"}}>- A short and simple game by John Djorup and Finbar McCarron!</p>
    </div>


    
  );
};

export default Game;

