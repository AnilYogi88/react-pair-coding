import React from 'react';
import AliveCard from './AliveCard';

function AliveCharacter({aliveCharacs}) {
    
    const displayAliveCharacters = () => {
        return aliveCharacs.map(aliveCharac => {
        return <AliveCard key={aliveCharac.char_id} aliveCharac={aliveCharac}/>
    })}

    return (
        <div className="characters">{displayAliveCharacters()}</div>
    )
}

export default AliveCharacter