import React, { useState } from 'react'
import styled from 'styled-components'

import ModConfig from './ModConfig'



const ConfigPanel = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const toggle = (id) => {
        setIsOpen(!isOpen)
        setSelected(id)
    }

  return (
    <ConfigPanelStyled>
        <h1 className='feat-config-title'> Berry Feature Settings</h1>
        <div className = 'mod-config'>
            <div className = 'mod-txt'>
                <span className = 'mod-config-title'>Mod Bot Settings</span>
                <button className = 'mod-config-btn' onClick={() => toggle('mod')}>Configure</button>
            </div>
            {
                isOpen && selected === 'mod' && <ModConfig />
            }
        </div>
    </ConfigPanelStyled>
  )
}

export default ConfigPanel


const ConfigPanelStyled = styled.div`
    font-family: ${pr => pr.theme.fonts.primary};
    width: 50%;

    .feat-config-title{
        font-size: ${pr => pr.theme.fontSizes.heading};
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
    .mod-config{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
    
    .mod-config-title{
        font-size: 1.5rem;
        color: #fff;
        font-weight: bold;
    }

    .mod-txt{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        outline: none;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.375);
        box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        height: 3rem;
        width: 100%;
        transition: all 0.3s ease-in-out;
        position: relative;
        right: 5%;

        &:hover{
            transform: scale(1.05);
            color: white;
        }


    }


    .mod-config-btn{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        color: #fff;
        font-size: 1rem;
        border: 1px solid #fff;
        border-radius: 16px;

        &:hover{
            background: rgba(0, 112, 243, .5);
        }
    }



`