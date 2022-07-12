import React, { useEffect } from 'react'

import styled from 'styled-components'


import { connect } from 'react-redux'
import * as action from '../../store/berry-twitch/action-creators'


function StartbotBtn(props) {
    const { startBerry } = props;


    const handleStartBerry = () => {
        startBerry();
        // set botRunning to true in local storage
        localStorage.setItem('botRunning', true)
    }

    return (
        <StartBot 
            onClick = {handleStartBerry}> Start Bot </StartBot>
    )
}



export default connect(null, action)(StartbotBtn)


const StartBot = styled.button`

    background-color: ${props => props.theme.colors.secondary};
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: ${pr => pr.theme.fontSizes.medium};
    font-weight: bold;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }
    




`