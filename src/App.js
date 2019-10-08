import React from 'react'
import './App.css'
import TradeArea from './containers/tradearea'
import PlayerArea from './containers/playerarea'

function App() {
  return (
    <div className="App">
      <PlayerArea />
      <TradeArea />
      <PlayerArea />     
    </div>
  )
}

export default App
