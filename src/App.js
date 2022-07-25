import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Start from './components/Start/Start';
import Game from './components/Game/Game';
import Finish from './components/Finish/Finish';
import { cards, cardsDeal } from './units/constants';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: null,
      username: null,
      game: {
        playerCard: null,
        computerCard: null
      },
      result: {
        player: 0,
        computer: 0
      }
    }
  }

  componentDidMount(){
    cardsDeal();
    this.setState({
      game: {
        playerCard: cards.player[0],
        computerCard: cards.computer[0]
      }
    })
  }

  //info functions//
  pageChange = page => {
    this.setState({ page: page })
  }

  usernameChange = text => {
    this.setState({ username: text })
  }

  //game functions//
  userWin = (playerCard, computerCard) => {
    if (playerCard.number > computerCard.number) {
      this.setState({ result: { player: this.state.result.player + 1, computer: this.state.result.computer } });
    } else if (playerCard.number < computerCard.number) {
      this.setState({ result: { player: this.state.result.player, computer: this.state.result.computer + 1 } });
    }
  }

  changeCard = (counter) => {
    this.setState({
      game: {
        playerCard: cards.player[counter],
        computerCard: cards.computer[counter]
      }
    })
  }

  resultZero = () => {
    this.setState({result: {player: 0, computer: 0}});
  }

  render() {
    switch (this.state.page) {
      case 'game': return <div className='wrapper'><Game pageChange={this.pageChange}
        username={this.state.username}
        userWin={this.userWin}
        changeCard={this.changeCard}
        game={this.state.game}
        deckLength={cards.player.length}
        result={this.state.result} /></div>
      case 'finish': return <div className='wrapper'><Finish pageChange={this.pageChange} result={this.state.result} resultZero={this.resultZero} /></div>
      default: return <div className='wrapper'><Start pageChange={this.pageChange} usernameChange={this.usernameChange} /></div>
    }
  }
}

export default App;