import React from "react";
import Game from "./Game";
import "./style.css";
export default function App() {
  return (
    <div className="app">
      <h1 className="game-title">Tic Tac Toe</h1>
      <Game />
    </div>
  );
}
