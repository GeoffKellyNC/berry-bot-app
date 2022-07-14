import React from 'react'
import styled from 'styled-components'

//Component Imports
import IssueChatForm from '../components/forms/IssueChat.form'

const Console = () => {
  return (
    <ConsoleStyled>
        <h1>CONSOLE</h1>
        <IssueChatForm />
    </ConsoleStyled>
  )
}

export default Console


const ConsoleStyled = styled.div`
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.large};
    color: white;



`