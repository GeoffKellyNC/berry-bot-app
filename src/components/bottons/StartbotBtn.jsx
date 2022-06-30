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