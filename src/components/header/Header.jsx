import React from 'react'
import styled from 'styled-components';

import Nav from './Nav';

function Header() {
  return (
    <HeaderStyled>
      <div className='version-info'>
        <p>Version: 0.0.2</p>
      </div>
      <div className = 'header-content'>
        <img 
          src='https://i.imgur.com/zwkhlja.png'
          alt="logo"
          className="logo"
        />
        <Nav />
      </div>
    </HeaderStyled>
  )
}

export default Header


const HeaderStyled = styled.header`


  .logo{
    width: 5em;
    margin-right: 1em;
    
  }


  



`