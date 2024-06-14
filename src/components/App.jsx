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
  const [clickedCards, setClickedCards] = useState([]);
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  function handleCloseClick() {
    setInfoIsOpen(false);
  }

  function handleOpenClick() {
    setInfoIsOpen(true);
  }

  function endRound(prevScore) {
    setHighScore(prevScore);
    setScore(0);
    setClickedCards([]);
  }

  function handleCardClick(id) {
    setClickedCards([...clickedCards, id]);
    if (score + 1 === 12) {
      endRound(score + 1);
    } else if (clickedCards.includes(id)) {
      endRound(score);
    } else {
      setScore(score + 1);
    }
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
        <Gameboard handleCardClick={handleCardClick} />
      </main>
      <footer>Created by FadingMorseCode</footer>
    </div>
  );
}
