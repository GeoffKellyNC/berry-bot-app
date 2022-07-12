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




`