import React from 'react';
import Character from './Character';

const CharacterList = props => {
    
    return (
        <div className='charList'>
            {props.starwarsChars.map((character, idx) => (
                <Character key={idx} character={character} />
            ))}
        </div>
    )
}

export default CharacterList;