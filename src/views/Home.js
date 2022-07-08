import React, { useEffect } from 'react'
import styled from 'styled-components'

import Panel from '../components/control-panel/Panel'
import ConfigPanel from '../components/configuration/ConfigPanel'


function Home() {


  return (
    <HomeStyled>
      <Panel  />
      <ConfigPanel />
    </HomeStyled>
  )
}



export default Home

const HomeStyled = styled.div`
  color: white;

`