import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/berry-twitch/action-creators'


// Importing Components 
import StartbotBtn from '../bottons/StartbotBtn'
import StartVoteBtn from '../bottons/startVote.btn'
import StartMod from '../bottons/StartMod'


const Panel = (props) => {
    const { 
        target, 
        startVote, 
        startMod,
        getTarget, 
    } = props;

    const [botRunning , setBotRunning] = useState(localStorage.getItem('botRunning'));

    // use useEffect to set botRunning to false in local storage on first render

    useEffect(() => {
        getTarget()
    }
        , [])
        



    return (
        <div>
            <div className='panel-info-display'>
                <h3 className = 'control-panel-text'> Control Panel </h3>
                <h4 className = 'target-channel-text'> Target: <span>{ target.length === 0 ? 'No Target Set' : target }</span></h4>
            </div>
            <div className = 'panel-btns'>
                <StartbotBtn />
                <StartVoteBtn startVote = {startVote} />
                <StartMod startMod = { startMod } />
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      target: state.target,
    }
  }
  

export default connect(mapStateToProps, actions)(Panel)