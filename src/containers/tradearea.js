import React from 'react'
import Explorers from '../components/explorers'
import TradeRow from '../components/traderow'
import TradeDeck from '../components/tradedeck'
import ScrapHeap from '../components/scrapheap'

class TradeArea extends React.Component {
  render () {
    return (
      <div id="trade-area">
        <Explorers />
        <TradeRow />
        <TradeDeck />
        <ScrapHeap />
      </div>
    )
  }
}

export default TradeArea