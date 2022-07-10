import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/berry-twitch/action-creators'



const StatusBar = (props) => {

    const { target, getTarget } = props

    console.log('target', target)

    useEffect(() => {
        getTarget()
    }, [])



  return (
    <StatusBarStyled>
        <div className = 'status-target'>
            <p className = 'status-target-text'>Target: {target.length > 1 ? target : 'No Target Set'}</p>
        </div>
        <div className = 'bot-status'>
            <p className = 'bot-status-text status-text'>Bot Status: <span>{props.botRunning ? 'Running': 'Not Running'}</span></p>
        </div>
        <div className = 'mod-status'>
            <p className = 'mod-status-text'>Mod Status: <span>{props.modRunning ? 'Running': 'Not Running'}</span></p>
        </div>
    </StatusBarStyled>
  )
}

const mapStateToProps = state => {
    return {
        target: state.target
    }
}

export default connect(mapStateToProps, actions)(StatusBar)

const StatusBarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    background: rgba(255, 255, 255, 0.375);
    box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    width: 80%;
    margin: 0 auto;
    height: 5em;
    font-family: ${pr => pr.theme.fonts.primary};
    color: white;
    font-size: ${pr => pr.theme.fontSizes.meduim};



`