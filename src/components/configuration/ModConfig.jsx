import React, { useState } from 'react'
import styled from 'styled-components'

// api Imports
import { postNewWord } from '../../util/api/configPanel/mod-config'

const initialFormValues = {
    word: '',
}

const ModConfig = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e, code) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleWordSubmit = async (e) => {
       await e.preventDefault();
        console.log('formValues: ', formValues)
        console.log('word')
        await postNewWord(formValues.word);
        setFormValues(initialFormValues)
    }


  return (
    <ModConfigStyled>
        <div className="mod-config-title">Mod Config</div>
        <div className = 'mod-add-words'>
            <form onSubmit={handleWordSubmit}>
                <input 
                    type="text"
                    placeholder="Add Word"
                    name = "word"
                    value={formValues.word}
                    onChange={handleChange}
                    className = 'mod-add-word-input'
                />
                <button type='submit'>Add Word</button>
            </form>
        </div>
    </ModConfigStyled>
  )
}

export default ModConfig


const ModConfigStyled = styled.div`

    .mod-config-title{
        font-size: 1.5rem;
        color: #fff;
        font-weight: bold;
    }

`