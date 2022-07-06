import React from 'react'
import styled from 'styled-components';

import Nav from './Nav';

function Header() {
  return (
    <HeaderStyled>
      <h1> Berry Bot </h1>
      <Nav />
      
    </HeaderStyled>
  )
}

export default Header


const HeaderStyled = styled.header`
  background-color: ${pr => pr.theme.colors.berryLight};
  width: 100%;
  height: 5em;
  font-family: ${pr => pr.theme.fonts.primary};
  color: white;
  font-size: ${pr => pr.theme.fontSizes.xlarge};



`