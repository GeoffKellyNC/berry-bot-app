import React from 'react'
import styled from 'styled-components'

const StartMod = ({ startMod }) => {

  const startModeration = () => {
    startMod()
  }

  return (
    <StartModStyled onClick={ startModeration }>
        Start Moderation
    </StartModStyled>
  )
}

export default StartMod

const StartModStyled = styled.button`
    background: rgba(255, 255, 255, 0.375);
    box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${pr => pr.theme.colors.primary};
        color: white;
    }


`