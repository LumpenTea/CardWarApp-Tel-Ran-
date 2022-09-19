import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gameStart, user } from '../../units/reducers';
import style from './start.module.css'

const Start = () => {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    return (
        <div className={style.grid}>
            <h1 className='mt-4'>Ready for war?</h1>
            <input onChange={e => setUsername(e.target.value)} placeholder='Enter your name'></input>
            <div className='mb-4'>
                <Link to='/game'>
                    <button onClick={() => {
                        dispatch(user(username));
                        dispatch(gameStart());
                    }} className='btn btn-dark mt-2'>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default Start