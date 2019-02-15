import React from 'react'

const Character = props => {
    return (
        <div className='character'>
            <p className='nameofChar'>{props.character.name}</p>
            <ul className='smallDetails'>
                <li>{`Birth Year: ${props.character.birth_year}`}</li>
                <li>{`Eye Color: ${props.character.eye_color}`}</li>
                <li>{`Hair Color: ${props.character.hair_color}`}</li>
            </ul>
        </div>
    )
}

export default Character;