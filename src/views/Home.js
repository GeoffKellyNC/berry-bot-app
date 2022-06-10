import React from 'react'

// components
import StartbotBtn from '../components/bottons/StartbotBtn';
import TargetChannel from '../components/forms/TargetChannel';
import ConfigureBotForm from '../components/forms/ConfigureBot.form';

function Home() {
  return (
    <div>
        <StartbotBtn />
        <TargetChannel />
        <ConfigureBotForm />
    </div>
  )
}

export default Home