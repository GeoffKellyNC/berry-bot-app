import React, { useState } from 'react'
import styled from 'styled-components'
import { MdDownloadDone, MdOutlineDeleteForever } from 'react-icons/md'

// api Imports
import { postNewWord } from '../../util/api/configPanel/mod-config'

const initialFormValues = {
    word: '',
}

const ModConfig = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleWordSubmit = async (e) => {
        e.preventDefault();
        console.log('handleWordSubmit')
        formValues.word.length >= 1 ? await postNewWord(formValues.word): console.log('word is too short')
        setFormValues(initialFormValues)
    }


  return (
    <ModConfigStyled>
        <div className="mod-config-title">Mod Config</div>
        <div className = 'mod-add-words'>
            <form className = 'word-form' onSubmit={handleWordSubmit} >
                <input 
                    type="text"
                    placeholder="Add Word"
                    name = "word"
                    value={formValues.word}
                    onChange={handleChange}
                    className = 'mod-add-word-input'
                />
                <button type = 'submit' className = 'mod-word-btn'>
                    <MdDownloadDone className='mod-add-word-icon'/>
                </button>
                <button>
                    <MdOutlineDeleteForever className='mod-add-word-icon'/>
                </button>
            </form>
        </div>
    </ModConfigStyled>
  )
}

export default ModConfig


const ModConfigStyled = styled.div`


.word-form{
    display: flex;
    flex-direction: row;
    align-items: center;    
}

.word-form input{
    height: 23px;
    width: 200px;
    border: 1px solid ${pr => pr.theme.colors.secondary};
    font-family: ${pr => pr.theme.fonts.primary};
    background-color: rgba(0,0,0,0.1);
    color: ${pr => pr.theme.colors.secondary};
    outline: none;
    border-radius: 5px;
}

.mod-word-btn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
}

    .mod-config-title{
        font-size: 1.5rem;
        color: #fff;
        font-weight: bold;
    }

    .mod-add-word-icon{
        font-size: 1.5rem;
        color: #fff;
        border: 1px solid #fff;
    }

`