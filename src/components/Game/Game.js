import React, { useState } from 'react'
import style from './game.module.css'

const Game = ({ pageChange, username, userWin, changeCard, game, deckLength, result }) => {

    const [counter, setCounter] = useState(1);

    const setButtonDirection = () => {
        if (counter >= deckLength) {
            userWin(game.playerCard, game.computerCard);
            pageChange('finish');
        } else {
            changeCard(counter);
            setCounter(prev => prev + 1);
            userWin(game.playerCard, game.computerCard);
        }
    }

    const checkNumber = number => {
        switch (number) {
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            case 14: return 'A';
            default: return number;
        }
    }

    const computerNumber = game.computerCard.number;
    const playerNumber = game.playerCard.number;
    const computerSuit = game.computerCard.suit;
    const playerSuit = game.playerCard.suit;

    return (
        <div className={style.display} >
            <h1 className='mt-4'>Computer</h1>
            <h3>{result.computer}</h3>
            <div className={style.cards}>
                <div className={style.card}>{computerSuit} {checkNumber(computerNumber)}</div>
                <div className={`${style.card} mt-4`}>{playerSuit} {checkNumber(playerNumber)}</div>
            </div>
            <h3>{result.player}</h3>
            <h1 className='mb-4'>{username}</h1>
            <div className={style.nextButton}>
                <button onClick={() => setButtonDirection()} className='btn btn-dark mb-4'>Next</button>
            </div>
        </div>
    )
}

export default Game