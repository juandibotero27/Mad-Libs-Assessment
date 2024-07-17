import React from 'react';

const Madlib = ({noun, noun2, adjective, color, id, clearMadlib}) => {
    

    // const restart = () => Restart(id)


    return (
        <div>
            <h3>There was a {color} {noun} who loved a {adjective} {noun2}</h3>
            <button onClick={clearMadlib}>Restart</button>
        </div>
    )
}

export default Madlib;