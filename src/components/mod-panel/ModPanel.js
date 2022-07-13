import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/berry-points/berry-points.creators'
import styled from 'styled-components'

import ModConfig from './ModConfig'
import ModPoints from './ModPoints'

const ModPanel = (props) => {

    const { pointsData, getPointsData, pingBerry } = props


    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)


    useEffect(() => {

        const getData = async () => {
            await getPointsData()
        }
        getData()

    }, [])


    const toggle = (id) => {
        setIsOpen(!isOpen)
        setSelected(id)
    }


  return (
    <ModPanelStyled>
        <h1 className='mod-panel-title'>Moderation Panel</h1>
        <div className = 'mod-config'>
            <div className = 'config-btn'>
                <button className = 'mod-config-btn' onClick={() => toggle('mod')}>Configure</button>
            </div>
            {
                isOpen && selected === 'mod' && <ModConfig />
            }
        </div>
        <div className = 'points-section'>
            <ModPoints pointsData = { pointsData } refreshPointData = { getPointsData } />
        </div>
    </ModPanelStyled>
  )
}


const mapStateToProps = (state) => {
    return({
        pointsData: state.pointsData
    })
}

export default connect(mapStateToProps, actions) (ModPanel)


const ModPanelStyled = styled.div`
        border-top: 2px solid ${pr => pr.theme.colors.berry};
        box-shadow: inset 0 0 10px ${pr => pr.theme.colors.berry};
        min-width: 100%;

    .mod-panel-title {
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        font-family: ${pr => pr.theme.fonts.secondary};
        color: white;
        text-align: center;
        margin-bottom: 20px;
    }

    .mod-config-btn {
        background-color: ${pr => pr.theme.colors.secondary};
        color: white;
        border: none;
        margin: 1rem;
        border-radius: 5px;
        padding: 10px;
        font-size: ${pr => pr.theme.fontSizes.small};
        font-family: ${pr => pr.theme.fonts.secondary};
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: ${pr => pr.theme.colors.primary};
        }
    }



    .mod-config-title {
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: thin;
        color: ${pr => pr.theme.colors.secondary};
    }


`