import React, {useState} from 'react'
import MadlibsForm from "./MadlibsForm";
import {v4 as uuid} from 'uuid';
import Madlib from './Madlib';

const MadlibComponents = () => {
    const [madlibs, setMadlibs] = useState([])

    const addMadlib = (newmadlib) => {
        setMadlibs(madlib => [...madlib, {...newmadlib}])
        console.log(madlibs)
    }

    const clearMadlib = () => {
        setMadlibs(x=>[])
    }

    // const Restart = id => {
    //     setMadlibs(madlibs  => madlibs.filter(madlib => madlib.id !== id))
    // }

    const components = madlibs.map(madlib => 
        <Madlib 
            key={madlib.id}
            id={madlib.id}
            noun={madlib.noun}
            noun2={madlib.noun2}
            adjective={madlib.adjective}
            color={madlib.color}
            clearMadlib={clearMadlib}
        />)
    // let parte1
    // if (madlibs.length === 0 ) { 
    // parte1 = <MadlibsForm  addMadlib={addMadlib} />
    // } else {parte1 = <h1>You already added a madlib</h1>}

    let parte1 = madlibs.length === 0 ? <MadlibsForm  addMadlib={addMadlib} madlibs={madlibs} /> : undefined

    return (
        <div>
                
           {parte1}
           {/* <MadlibsForm  addMadlib={addMadlib} madlibs={madlibs} /> */}
           
           {components}
            
        </div>
        
    )
}

export default MadlibComponents