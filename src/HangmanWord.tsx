type HangmanWordProps = {
    guessedLetters : string[],
    guessWord: string,
    revealWord?: boolean //optional
}

export function HangmanWord( {guessedLetters, guessWord, revealWord = false} : HangmanWordProps ) {

   

    return <div style={{ display: 'flex', gap: '1rem', fontSize: '5rem', fontWeight: '700', textTransform: 'uppercase', fontFamily: 'Nunito' }}>
        
        {guessWord.split('').map((letter, i) => (
            <span style={{ borderBottom: '.5rem solid #5D6D7E', borderRadius: '1rem' }} key={i}>

                <span style={{ visibility: guessedLetters.includes(letter) || revealWord ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && revealWord ? '#B7B75B' : 'black' }}>{letter}</span>

            </span>
        ))}

    </div>

}