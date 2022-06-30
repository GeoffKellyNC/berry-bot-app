import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/configure">Configure Bot</NavLink>
    </div>
  )
}

export default Nav