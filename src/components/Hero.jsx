import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroStyled>
        <h1 className='hero-title'> Berry Bot Control Panel </h1>
    </HeroStyled>
  )
}

export default Hero

const HeroStyled = styled.div`
    font-family: ${pr => pr.theme.fonts.primary};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

    .hero-title{
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        color: ${pr => pr.theme.colors.accent};
        margin-bottom: 1rem;
    }



`