const HEAD = (

    <div style={{ width: '50px', height: '50px', borderRadius: '100px', border: '10px dashed #2C3E50', position: 'absolute', top: '50px', right: '-30px'}} />

)

const BODY = (

    <div style={{ width: '10px', height: '100px', background: '#2C3E50', position: 'absolute', top: '120px', right: '0'}} />

)

const ARM_RIGHT = (

    <div style={{ width: '100px', height: '10px', background: '#2C3E50', borderTopRightRadius: '2rem', position: 'absolute', top: '150px', right: '-100px', rotate: '-30deg', transformOrigin: 'left bottom'}} />

)
    
const ARM_LEFT = (

    <div style={{ width: '100px', height: '10px', background: '#2C3E50', borderTopLeftRadius: '2rem', position: 'absolute', top: '150px', right: '10px', rotate: '30deg', transformOrigin: 'right bottom'}} />
    
)

const LEG_RIGHT = (

    <div style={{ width: '100px', height: '10px', background: '#2C3E50', borderTopRightRadius: '2rem', position: 'absolute', top: '210px', right: '-90px', rotate: '50deg', transformOrigin: 'left bottom'}} />

)

const LEG_LEFT = (

    <div style={{ width: '100px', height: '10px', background: '#2C3E50', borderTopLeftRadius: '2rem', position: 'absolute', top: '210px', right: '0', rotate: '-50deg', transformOrigin: 'right bottom'}} />

)

const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT]

type HangmanPictureProps = {
    numberOfGuess: number
}

export function HangmanPicture( {numberOfGuess} : HangmanPictureProps ) { 

    return <div style={{ position: 'relative' }}>

        {BODY_PARTS.slice(0, numberOfGuess)}

        <div style={{ height: '50px', width: '10px', background: '#2C3E50', position: 'absolute', top: '0', right: '0'}} />

        <div style={{ height: '10px', width: '200px', background: '#2C3E50', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', marginLeft: '145px'}} />

        <div style={{ height: '400px', width: '10px', background: '#2C3E50', marginLeft: '145px' }}/>

        <div style={{ height: '10px', width: '300px', background: '#2C3E50', borderRadius: '1rem' }} />  

    </div>

}