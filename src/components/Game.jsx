import React, { useState, useRef } from "react";
import "./Game.css";

function Game({ verifyLetter, guessedLetters, pickedWord, pisckedCategory, letters, wrongLetters, score, guesses }) {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit =(e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }
  const handleSubmitWord = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <div className="game">
        
          
        <h1>Adivinhe a Palavra:</h1>
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        
        

        <h3 className="tip">Dica sobre a Palavra: <span>{pisckedCategory}</span></h3>
        <p>Você ainda tem {guesses} tentativa(s)</p>
        
        <div className="wordContainer">
          
          {letters.map((letter,i) => (
            guessedLetters.includes(letter) ? (
              <span className="letter" key={i} >{letter}</span>
            ): (
              <span className="blankSquare" key={i}></span>
            )
          ))}
        </div>

        <div className="letterContainer">
          <p>Advinhe uma letra da palavra secreta ou tente acertar a palavra</p>
          <form onSubmit={handleSubmit}>
            <input type="text"name="letter" maxLength={1} required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
            <button>Jogar!</button>
          </form>
          <form onSubmit={handleSubmitWord}>
            <input className="inputWord" type="text" name="wordSecret" maxLength={1} required />
            <button>Jogar!</button>
          </form>
        </div>

        <div className="wrongLettersContainer">
          <p>Letras ja utilizadas:</p>
          {wrongLetters.map((letter, i) => (
           
              <span key={i}>{letter}, </span>
            
          ))}
        </div>
        </div>
      
    </>
  );
}

export default Game;
