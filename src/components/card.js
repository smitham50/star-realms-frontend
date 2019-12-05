import React from 'react'

class Card extends React.Component {
  render () {
    return (
      <div className='card'>

      </div>
    )
  }
}

function msp(state) {

  const {
    
  } = state.supply
  

  return {

    

  }

}

function mdp(dispatch) {
  return {
   

  }
}

export default connect(msp, mdp)(Card)