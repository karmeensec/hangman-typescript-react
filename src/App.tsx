import { useState } from "react"
import words from './comWordList.json'

import { HangmanPicture } from "./HangmanPicture";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";


function App() {

  const [guessWord, setGuessWord] = useState( ()=> {
    return words[Math.floor(Math.random() * words.length)]; // random guess
  } );

  const [guessedLetters, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetter = guessedLetters.filter(letter => !guessWord.includes(letter)) // not in the word list

  // Game TSX

  return <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem', margin: '0 auto', alignItems: 'center' }}>

    <div style={{fontSize: '2rem', textAlign: 'center', fontFamily: 'Nunito'}}>Lost Won</div>

    <HangmanPicture numberOfGuess = {incorrectLetter.length} />
    <HangmanWord guessedLetters = {guessedLetters} guessWord = {guessWord} />

    <div style={{alignSelf: 'stretch'}}>
      <Keyboard />
    </div>
    

  </div>

}

export default App
