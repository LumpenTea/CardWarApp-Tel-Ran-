import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Start from './components/Start/Start';
import Game from './components/Game/Game';
import Finish from './components/Finish/Finish';
import { cards, cardsDeal } from './units/constants';

const App = () => {

  const [page, setPage] = useState(null);
  const [username, setUsername] = useState(null);
  const [game, setGame] = useState({ playerCard: null, computerCard: null });
  const [result, setResult] = useState({ player: 0, computer: 0 });

  useEffect(() => {
    cardsDeal();
    setGame({ playerCard: cards.player[0], computerCard: cards.computer[0] });
  }, []);

  //game functions//
  const userWin = (playerCard, computerCard) => {
    if (playerCard.number > computerCard.number) {
      setResult(prev => ({ player: prev.player + 1, computer: prev.computer }));
    } else if (playerCard.number < computerCard.number) {
      setResult(prev => ({ player: prev.player, computer: prev.computer + 1 }));
    }
  }

  const changeCard = counter => {
    setGame({ playerCard: cards.player[counter], computerCard: cards.computer[counter] });
  }

  const resultZero = () => {
    setResult({ player: 0, computer: 0 });
  }

  switch (page) {
    case 'game': return (
      <div className='wrapper'>
        <Game pageChange={setPage}
          username={username}
          userWin={userWin}
          changeCard={changeCard}
          game={game}
          deckLength={cards.player.length}
          result={result} />
      </div>)
    case 'finish': return <div className='wrapper'><Finish pageChange={setPage} result={result} resultZero={resultZero} /></div>
    default: return <div className='wrapper'><Start pageChange={setPage} usernameChange={setUsername} /></div>
  }
}

export default App;