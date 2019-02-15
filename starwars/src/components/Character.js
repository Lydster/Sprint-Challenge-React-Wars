import React from 'react'

const Character = props => {
    return (
        <div className='character'>
            <p>{props.character.name}</p>
        </div>
    )
}

export default Character;