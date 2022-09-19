import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextCard } from '../../units/reducers';
import style from './game.module.css'

const Game = () => {

    const checkNumber = number => {
        switch (number) {
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            case 14: return 'A';
            default: return number;
        }
    }

    const { computerCard, playerCard, computerResult, playerResult, page } = useSelector(state => state.game);
    const { user } = useSelector(state => state.meta);
    const dispatch = useDispatch();

    return (
        <div className={style.display} >
            <h1 className='mt-4'>Computer</h1>
            <h3>{computerResult}</h3>
            <div className={style.cards}>
                <div className={style.card}>{computerCard.suit} {checkNumber(computerCard.number)}</div>
                <div className={`${style.card} mt-4`}>{playerCard.suit} {checkNumber(playerCard.number)}</div>
            </div>
            <h3>{playerResult}</h3>
            <h1 className='mb-4'>{user}</h1>
            <div className={style.nextButton}>
                <Link to={page} replace >
                    <button onClick={() => dispatch(nextCard())} className='btn btn-dark mb-4'>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default Game