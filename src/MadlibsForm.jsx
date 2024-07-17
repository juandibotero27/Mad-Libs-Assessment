import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'


const MadlibsForm = ({addMadlib, madlibs}) => {
    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    }
    const [FormData, setFormData] = useState(INITIAL_STATE)


    const handleChange = e => {
        const {name,value} = e.target
        setFormData(FormData => ({
            ...FormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addMadlib({...FormData, id: uuid()})
        setFormData(INITIAL_STATE)
        
    }
 


    return (
        <form onSubmit={handleSubmit}>
            <input
                id='noun'
                name='noun'
                placeholder='Noun'
                value={FormData.noun}
                onChange={handleChange}
            />
            <input
                id='noun2'
                name='noun2'
                placeholder='Noun 2'
                value={FormData.noun2}
                onChange={handleChange}
            />
            <input
                id='adjective'
                name='adjective'
                placeholder='Adjective'
                value={FormData.adjective}
                onChange={handleChange}
            />
            <input
                id='color'
                name='color'
                placeholder='Color'
                value={FormData.color}
                onChange={handleChange}
            />
            <button>Get Story</button>
        </form>
    )
}

export default MadlibsForm;