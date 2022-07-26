import React from 'react'
import style from './start.module.css'

const Start = ({ pageChange, usernameChange }) => {

    const changeUser = event => {
        usernameChange(event.target.value);
    }

    return (
        <div className={style.grid}>
            <h1 className='mt-4'>Ready for war?</h1>
            <input onChange={changeUser} placeholder='Enter your name'></input>
            <div className='mb-4'>
                <button onClick={() => pageChange('game')} className='btn btn-dark mt-2'>Start</button>
            </div>
        </div>
    )
}

export default Start