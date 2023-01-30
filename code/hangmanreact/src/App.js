import React, { useState, useEffect, useRef } from 'react';
import {dictionary} from './words/dictionary';
import './App.css';
import Figure from './components/figure';
import WrongLetters from './components/wrongLetters';

function Words({randomWord, correctLetters}){
  return(
    <div style={{textAlign:'center'}}>
      {randomWord.split('').map((letter, i) => {
        return(
          <span className='letter' key={i}>
            {correctLetters.includes(letter) ? letter : ''}</span>
        )
        })}
    </div>
  )
}
// getting random word
let words = dictionary
words = words.split('\n')
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex]
console.log(randomWord)


function App() {
  const [run, setRun] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() =>{
    const handleKeyDown = event => {
      const {key, keyCode} = event

        if (run && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (randomWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter])

            } 
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter])
            }
          }
        } 
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  },[correctLetters,wrongLetters,run]);

  return (
    <div>
      <h1 style={{textAlign:'center', fontSize:'50px'}}>Hangman</h1>
      <h3 style={{textAlign:'center'}}>Type a letter</h3>
      {/* container to hold the incorrectly guessed characters */}
      <div className='guessedCharacters'>
        <WrongLetters wrongLetters={wrongLetters}/>
      </div>

      {/* container to hold image of hangman */}
      <Figure wrongLetters={wrongLetters}/>

      <div>
        <br></br>
        <Words randomWord={randomWord} correctLetters={correctLetters}/>
      </div>
    </div>
  );
}

export default App;
