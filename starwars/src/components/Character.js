import React from 'react'

const Character = props => {
    return (
        <div className='character'>
            <p>{props.starwarsChars.name}</p>
        </div>
    )
}

export default Character;