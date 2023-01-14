import { KeyboardEvent, useCallback, useEffect, useState } from "react"
import words from './comWordList.json'

import { HangmanPicture } from "./HangmanPicture";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";


const getWord = function() {

  return words[Math.floor(Math.random() * words.length)]; // random guess

}


function App() {

  const [guessWord, setGuessWord] = useState( getWord);

  const [guessedLetters, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetter = guessedLetters.filter(letter => !guessWord.includes(letter)) // not in the word list

  const loser = incorrectLetter.length >= 6; // 6 body parts
  const winner = guessWord.split('').every( letter => guessedLetters.includes(letter) );


  const addGuessedLetter = useCallback(( letter: string ) => {

      if (guessedLetters.includes(letter) || winner || loser) return;

      setGuessedLetter(currentLetters => [...currentLetters, letter]);

  }, [guessedLetters, winner, loser]); 


  


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




  useEffect( ()=> {

    const handler = (e: KeyboardEvent) => {  // or (e: any)

      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetter([]);  // clear the guess list
      setGuessWord(getWord());

    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }

  }, [guessedLetters] );


  // Game JSX

  return <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem', margin: '0 auto', alignItems: 'center' }}>

    <div style={{fontSize: '2rem', textAlign: 'center', fontFamily: 'Nunito', fontWeight: '500'}}> {winner && 'You Won 🥳'} {loser && 'You Lost 😥 - Try Again!'} </div>

    <HangmanPicture numberOfGuess = {incorrectLetter.length} />
    <HangmanWord guessedLetters = {guessedLetters} guessWord = {guessWord} revealWord = {loser} />

    <div style={{alignSelf: 'stretch'}}>

      <Keyboard 
        disabled = {winner || loser}
        activeLetter = {guessedLetters.filter(letter => guessWord.includes(letter))}
        inactiveLetter = {incorrectLetter}
        addGuessedLetter = {addGuessedLetter}
      />

    </div>
    

  </div>

}

export default App
