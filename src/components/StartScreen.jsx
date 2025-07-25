import "./StartScreen.css"
import React from 'react'

function StartScreen({startGame}) {
  return (
    <div className="start">
        <h1>Secret <span> <br/>Word</span></h1>
        <p>Clique no botão para iniciar o Jogo</p>
        <button onClick={startGame}>START</button>
    </div>
  )
}

export default StartScreen