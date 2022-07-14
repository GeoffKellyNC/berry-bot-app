import React from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero'
import ModPanel from '../components/mod-panel/ModPanel'
import Panel from '../components/control-panel/Panel'
import StatusBar from '../components/statusBar/StatusBar'



function Home() {


  return (
    <HomeStyled>
      <Hero />
      <div className = 'home-body'>
        <StatusBar />
        <Panel />
        <ModPanel />
      </div>
    </HomeStyled>
  )
}



export default Home

const HomeStyled = styled.div`

  .home-body {
    background: rgb(13 13 15 / 75%);
  }

`