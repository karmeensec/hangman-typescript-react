import { useState } from "react"
import words from './comWordList.json'

import { HangmanPicture } from "./HangmanPicture";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";


function App() {

  const [guessWord, setGuessWord] = useState( ()=> {
    return words[Math.floor(Math.random() * words.length)]; // random guess
  } );

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  // Game TSX

  return <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem', margin: '0 auto', alignItems: 'center' }}>

    <div style={{fontSize: '2rem', textAlign: 'center', fontFamily: 'Nunito'}}>Lost Won</div>

    <HangmanPicture />
    <HangmanWord />
    <Keyboard />

  </div>

}

export default App
