import React from 'react'
import { cardsDeal } from '../../units/constants';
import style from './finish.module.css'

const Finish = ({ pageChange, result, resultZero }) => {
    
    const victory = () => {
        if(result.player > result.computer){
            return('Win');
        } else if (result.player < result.computer){
            return('Lose');
        } else {
            return('Draw');
        }
    }
    
    return (
        <div className={style.grid}>
            <h1 className='mt-4'>{victory()}</h1>
            <h3>{result.player} / {result.computer} </h3>
            <button onClick={() => {
                pageChange('game');
                resultZero();
                cardsDeal();
            }} className='btn btn-danger mt-2 mb-4'>Again?</button>
        </div>
    )
}

export default Finish