import keyStyles from './Keyboard.module.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  
  type KeyboardProps = {
    activeLetter: string[],
    inactiveLetter: string[],
    addGuessedLetter: (letter: string) => void,
  }


export function Keyboard({ activeLetter, inactiveLetter, addGuessedLetter } : KeyboardProps) {

    return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '1rem', padding: '1rem', border: '.1rem solid transparent', borderRadius: '.5rem', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>

        {KEYS.map(key => {
             const isActive = activeLetter.includes(key);
             const isInactive = inactiveLetter.includes(key);

            return (
                <button onClick={ ()=> addGuessedLetter(key)  } className={ ` ${keyStyles.btn} ${isActive ? keyStyles.active : ''} ${isInactive ? keyStyles.inactive : ''} `} disabled = {isActive || isInactive} key={key}>{key}</button>
            )
       
        })}

    </div>

}