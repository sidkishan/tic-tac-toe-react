import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = currentMove % 2 === 0;
  const currentSquaresStatus = history[currentMove];
  function handlePlay(nextSquares) {
    const copyHistory = history.slice(0, currentMove + 1);
    setHistory([...copyHistory, nextSquares]);
    setCurrentMove(copyHistory.length);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((currSquares, moveOrIndex) => {
    let desc;
    if (moveOrIndex > 0) {
      desc = "Go to move #" + moveOrIndex;
    } else {
      desc = "Go to isstart ->";
    }
    return (
      <li key={moveOrIndex}>
        <button onClick={() => jumpTo(moveOrIndex)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board
          isXNext={isXNext}
          squares={currentSquaresStatus}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <p>Time travel</p>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
