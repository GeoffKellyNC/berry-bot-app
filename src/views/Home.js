import React, { useEffect } from 'react'
import styled from 'styled-components'

import Panel from '../components/control-panel/Panel'


function Home() {


  return (
    <HomeStyled>
      <Panel  />
    </HomeStyled>
  )
}



export default Home

const HomeStyled = styled.div`
  color: white;

`