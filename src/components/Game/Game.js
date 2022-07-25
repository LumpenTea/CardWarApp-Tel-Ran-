import React from 'react'
import style from './game.module.css'

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardCounter: 1
        }
    }

    setButtonDirection = () => {
        if (this.state.cardCounter >= this.props.deckLength) {
            this.props.userWin(this.props.game.playerCard, this.props.game.computerCard);
            this.props.pageChange('finish');
        } else {
            this.props.changeCard(this.state.cardCounter);
            this.setState({ cardCounter: this.state.cardCounter + 1 })
            this.props.userWin(this.props.game.playerCard, this.props.game.computerCard);
        }
    }

    checkNumber = number => {
        switch(number){
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            case 14: return 'A';
            default: return number;
        }
    }

    render() {
        const computerNumber = this.props.game.computerCard.number;
        const playerNumber = this.props.game.playerCard.number;
        const computerSuit = this.props.game.computerCard.suit;
        const playerSuit = this.props.game.playerCard.suit;
        return (
            <div className={style.display} >
                <h1 className='mt-4'>Computer</h1>
                <h3>{this.props.result.computer}</h3>
                <div className={style.cards}>
                    <div className={style.card}>{computerSuit} {this.checkNumber(computerNumber)}</div>
                    <div className={`${style.card} mt-4`}>{playerSuit} {this.checkNumber(playerNumber)}</div>
                </div>
                <h3>{this.props.result.player}</h3>
                <h1 className='mb-4'>{this.props.username}</h1>
                <div className={style.nextButton}>
                    <button onClick={() => this.setButtonDirection()} className='btn btn-danger mb-4'>Next</button>
                </div>
            </div>
        )
    }
}

export default Game