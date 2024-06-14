import { useState } from 'react';
import Gameboard from './Gameboard';

function PlayInfo({ onClick }) {
  return (
    <div className='instructions-container'>
      <p>
        PokéShuffle tests your memory. Your objective is to click on each of the
        12 cards only once. Can you earn a high score of 12?
      </p>
      <button onClick={onClick}>X</button>
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
    <>
      <header>
        <h1>
          <span>Poké</span>
          <span>Shuffle</span>
        </h1>
        <div className='score-containers'>
          <p>
            Score: <span>{score}</span>
          </p>
          <p>
            High Score: <span>{highScore}</span>
          </p>
        </div>
      </header>
      <div className='play-info-container'>
        <button className='info-open-btn' onClick={handleOpenClick}>
          How To Play
        </button>
        {infoIsOpen && <PlayInfo onClick={handleCloseClick} />}
      </div>
      <main>
        <Gameboard handleCardClick={handleCardClick} />
      </main>
      <footer>Created by FadingMorseCode</footer>
    </>
  );
}
