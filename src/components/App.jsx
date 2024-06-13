import { useState } from 'react';
import Gameboard from './Gameboard';

function PlayInfo({ onClick }) {
  return (
    <div>
      <p>
        PokéShuffle tests your memory. Your objective is to click on each card
        only once. Can you remember which cards you&apos;ve already clicked?
      </p>
      <button onClick={onClick}>Close</button>
    </div>
  );
}

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  function handleCloseClick() {
    setInfoIsOpen(false);
  }

  function handleOpenClick() {
    setInfoIsOpen(true);
  }

  return (
    <div>
      <header>
        <h1>PokéShuffle</h1>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </header>
      <div>
        <button onClick={handleOpenClick}>How To Play</button>
        {infoIsOpen && <PlayInfo onClick={handleCloseClick} />}
      </div>
      <main>
        <Gameboard />
      </main>
      <footer>Created by FadingMorseCode</footer>
    </div>
  );
}
