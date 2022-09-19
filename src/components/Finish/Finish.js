import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gameStart, winCheck } from '../../units/reducers';
import style from './finish.module.css'

const Finish = () => {

    const dispatch = useDispatch();
    dispatch(winCheck());
    const { resultWord, computerResult, playerResult } = useSelector(state => state.game);

    return (
        <div className={style.grid}>
            <h1 className='mt-4'>{resultWord}</h1>
            <h3>{playerResult} / {computerResult} </h3>
            <Link to='/game'>
                <button onClick={() => {
                    dispatch(gameStart());
                }}
                    className='btn btn-dark mt-2 mb-4'>Again?</button>
            </Link>
        </div>
    )
}

export default Finish