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
    color: white;
    text-decoration: none;
    margin-right: 1em;
    border-bottom: 1px solid white;
  }


`