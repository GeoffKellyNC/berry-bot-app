import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/configure">Configure Bot</NavLink>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.div`
  a{
    font-family: ${pr => pr.theme.fonts.primary};
    color: ${pr => pr.theme.colors.berry};
    text-decoration: none;
    margin-right: 1em;
  }


`