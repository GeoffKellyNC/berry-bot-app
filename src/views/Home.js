import React, { useEffect } from 'react'
import styled from 'styled-components'

import Panel from '../components/control-panel/Panel'
import ConfigPanel from '../components/configuration/ConfigPanel'
import Hero from '../components/Hero'


function Home() {


  return (
    <HomeStyled>
      <Hero />
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