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
        startVote, 
        startMod,
    } = props;

    const [botRunning , setBotRunning] = useState(localStorage.getItem('botRunning'));



        

    return (
        <PanelStyled>
            <div className='panel-info-display'>
                <h3 className = 'control-panel-text'> Control Panel </h3>
            </div>
            <div className = 'panel-btns'>
                <StartbotBtn />
                <StartVoteBtn startVote = {startVote} />
                <StartMod startMod = { startMod } />
            </div>

        </PanelStyled>
    )
}

const mapStateToProps = state => {
    return {
      target: state.target,
    }
  }
  

export default connect(mapStateToProps, actions)(Panel)


const PanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;

    .panel-info-display{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1em;
        border-bottom: 1px solid #fff;
    }



`