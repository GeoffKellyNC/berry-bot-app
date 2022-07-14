/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../store/berry-twitch/action-creators'



const StatusBar = (props) => {

    const { target, getTarget, pingBerry, botStatus } = props



    useEffect(() => {
        getTarget()
        pingBerry()
    }, [])



  return (
    <StatusBarStyled>
        <div className = 'status-target'>
            <p className = 'status-target-text status-text'>Target:<span>{target.length > 1 ? target : 'No Target Set'}</span> </p>
        </div>
        <div className = 'bot-status'>
            <p className = 'bot-status-text status-text'>Bot Status: <span>{props.botRunning ? 'Running': 'Not Running'}</span></p>
        </div>
        <div className = 'mod-status'>
            <p className = 'mod-status-text status-text'>Mod Status: <span>{props.modRunning ? 'Running': 'Not Running'}</span></p>
        </div>
        <div className = 'server-status'>
            <p className = 'server-status-text status-text'>Server Status: <span>{botStatus.running ? 'Running': 'Not Running'}</span></p>
        </div>
    </StatusBarStyled>
  )
}

const mapStateToProps = state => {
    return {
        target: state.target,
        botStatus: state.botStatus,
    }
}

export default connect(mapStateToProps, actions)(StatusBar)

const StatusBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${pr => pr.theme.colors.berry};
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    padding: 10px;

    .status-text{
        color: ${pr => pr.theme.colors.secondary};
        }

    .status-text span {
        color: ${pr => pr.theme.colors.primary};
        margin: 0 10px;
    }




`