import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/berry-twitch/action-creators'

function StartbotBtn(props) {
    const { startBerry } = props;


    const handleStartBerry = () => {
        startBerry();
    }

    return (
        <button 
            onClick = {handleStartBerry}> Start Bot </button>
    )
}

export default connect(null, action)(StartbotBtn)