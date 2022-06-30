import React from 'react'
import styled from 'styled-components'

const startVoteBtn = ({ startVote }) => {

    const handleClick = () => {
        startVote()
    }


  return (
    <StartVote
        onClick={handleClick}> Start Vote </StartVote>
  )
}

export default startVoteBtn


const StartVote = styled.button`
    background-color: ${pr => pr.theme.colors.berry};
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