import React, { useEffect } from 'react'
import styled from 'styled-components'

import ConfigPanel from '../components/configuration/ConfigPanel'
import Hero from '../components/Hero'
import Panel from '../components/control-panel/Panel'
import StatusBar from '../components/statusBar/StatusBar'


function Home() {


  return (
    <HomeStyled>
      <Hero />
      <StatusBar />
      <div className = 'home-body'>
        <Panel  />
        <ConfigPanel />
      </div>

    </HomeStyled>
  )
}



export default Home

const HomeStyled = styled.div`
  color: white;

  .home-body {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 3rem 0;
  }

`