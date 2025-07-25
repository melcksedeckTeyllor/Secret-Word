import {wordsList} from './data/words'
import StartScreen from './components/StartScreen'
import './App.css'
import Game from './components/Game'
import GameOver from './components/GameOver'
import React, { useState, useEffect, useCallback, use } from 'react'

function App() {
  const gameStages = [{id:1, name: "start"}, {id:2, name: "game"}, {id:3, name: "end"}]
  const [gameStage, setGameStage] = useState(gameStages[0].name)
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(gameStages[1].name)
  }
  console.log(words)
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&  <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App
