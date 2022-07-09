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

  .header-content{
    width: 100%;
    height: 5em;
    font-family: ${pr => pr.theme.fonts.primary};
    color: white;
    font-size: ${pr => pr.theme.fontSizes.xlarge};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    box-sizing: border-box;
  }

  .app-title {
    font-size: 3rem;
    text-transform: uppercase;
    padding-left: 3em;
  }

  .version-info {
    font-size: 1rem;
    padding-right: 3em;
    color: white;
    display: flex;
    justify-content: flex-end;
  }

  .logo{
    width: 5em;
    margin-right: 1em;
    
  }


  



`