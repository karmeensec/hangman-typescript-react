type HangmanWordProps = {
    guessedLetters : string[],
    guessWord: string
}

export function HangmanWord( {guessedLetters, guessWord} : HangmanWordProps ) {

   

    return <div style={{ display: 'flex', gap: '1rem', fontSize: '5rem', fontWeight: '700', textTransform: 'uppercase', fontFamily: 'Nunito' }}>
        
        {guessWord.split('').map((letter, i) => (
            <span style={{ borderBottom: '.5rem solid #5D6D7E', borderRadius: '1rem' }} key={i}>

                <span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden' }}>{letter}</span>

            </span>
        ))}

    </div>

}