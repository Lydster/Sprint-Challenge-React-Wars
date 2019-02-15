import React from 'react';
import Character from './Character';




const CharacterList = props => {
    
    return (
        <div className='charList'>
            {props.starwarsChars.map((char, idx) => (
                <Character key={idx} character={char} />
            ))}
        </div>
    )
}

export default CharacterList;