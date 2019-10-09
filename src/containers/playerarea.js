import React from 'react'
import PlayerInfo from '../components/playerinfo'
import Discard from '../components/discard'
import Deck from '../components/deck'
import Hand from '../components/hand'
import Bases from '../components/bases'

class PlayerArea extends React.Component {
  render() {
    return (
      <div className="player-area">
        <PlayerInfo />
        <Discard />
        <Deck />
        <Hand />
        <Bases />
      </div>
    )
  }
}

export default PlayerArea