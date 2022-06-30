import React from 'react'
import styled from 'styled-components'

import StartbotBtn from '../components/bottons/StartbotBtn';
import TargetChannel from '../components/forms/TargetChannel';
import ConfigureBotForm from '../components/forms/ConfigureBot.form';

const ConfigureBot = () => {
  return (
    <BotConfigure>
        <h1>Configure Bot</h1>
        <TargetChannel />
        <ConfigureBotForm />
    </BotConfigure>
  )
}

export default ConfigureBot


const BotConfigure = styled.div`
    color: white;

`