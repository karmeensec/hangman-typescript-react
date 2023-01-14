import { useCallback, useEffect, useState } from "react"
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


  const addGuessedLetter = useCallback(( letter: string ) => {

      if (guessedLetters.includes(letter)) return;

      setGuessedLetter(currentLetters => [...currentLetters, letter]);

  }, [guessedLetters]); 


  


  useEffect( () => {

    const handler = (e: KeyboardEvent) => {

      const key = e.key;

      if (!key.match(/^[a-z]$/)) return; // if start and end of the regex matches between a-z 

      e.preventDefault();
      addGuessedLetter(key);

    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }

  }, [guessedLetters] );



  // Game TSX

  return <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem', margin: '0 auto', alignItems: 'center' }}>

    <div style={{fontSize: '2rem', textAlign: 'center', fontFamily: 'Nunito'}}>Lost Won</div>

    <HangmanPicture numberOfGuess = {incorrectLetter.length} />
    <HangmanWord guessedLetters = {guessedLetters} guessWord = {guessWord} />

    <div style={{alignSelf: 'stretch'}}>

      <Keyboard 
        activeLetter = {guessedLetters.filter(letter => guessWord.includes(letter))}
        inactiveLetter = {incorrectLetter}
        addGuessedLetter = {addGuessedLetter}
      />

    </div>
    

  </div>

}

export default App
