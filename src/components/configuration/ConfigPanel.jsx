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
        <div className = 'mod-config'>
            <div className = 'mod-txt-btn'>
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
    
    .mod-config-title{
        font-size: 1.5rem;
        color: #fff;
        font-weight: bold;

    }



`