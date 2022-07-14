import React from 'react'
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


    return (
        <PanelStyled>
            <div className='panel-info-display'>
                <h3 className = 'control-panel-text'> Bot Controls </h3>
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
    padding-top: 2rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${pr => pr.theme.colors.white};
    font-family: ${pr => pr.theme.fonts.primary};
    
    .panel-btns{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .control-panel-text{
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        margin-bottom: 1rem;
        margin-left: 3rem;
    }
 



`