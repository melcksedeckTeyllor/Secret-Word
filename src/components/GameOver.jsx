import React from 'react'
import './GameOver.css'

function GameOver({retry}) {
  return (
    <>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar Jogo</button>
    </>
  )
}

export default GameOver