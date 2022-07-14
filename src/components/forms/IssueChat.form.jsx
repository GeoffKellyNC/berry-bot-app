import React, { useState } from 'react'
import styled from 'styled-components'

import { issueMessage } from '../../util/api/IssueChat'

const iFormValues = {
    message: ''
}

const IssueChatForm = () => {
    const [formValues, setFormValues ] = useState(iFormValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        const message = formValues.message
        issueMessage(message)
    }

  return (
    <IssueChatStyled>
        <input 
            className='search-input'
            type ='text'
            name = 'message'
            value = {formValues.message}
            onChange = { handleChange }
        />
        <button onClick={ handleSubmit } className = 'chat-sbmt-btn'>CHAT</button>
    </IssueChatStyled>
  )
}

export default IssueChatForm


const IssueChatStyled = styled.form`



`