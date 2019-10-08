import React from 'react'
import './App.css'
import TradeArea from './containers/tradearea'
import PlayerOneArea from './containers/playeronearea'
import PlayerTwoArea from './containers/playertwoarea'

function App() {
  return (
    <div className="App">
      <PlayerTwoArea />
      <TradeArea />
      <PlayerOneArea />     
    </div>
  )
}

export default App
