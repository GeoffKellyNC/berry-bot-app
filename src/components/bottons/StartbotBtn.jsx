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