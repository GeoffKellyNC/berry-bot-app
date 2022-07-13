import React, { useState } from 'react'
import styled from 'styled-components'




const PointTable = ({ account }) => {


  return (
    <PointTableStyled className = 'point-container'>
        <p className = 'point-name p-text'><span>User: </span>{account.user}</p>
        <p className = 'point-points p-text'><span>Points: </span>{account.points}</p>
    </PointTableStyled>
  )
}

export default PointTable

const PointTableStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10rem;
    padding: 1rem;
    font-size: ${pr => pr.theme.fontSizes.small};
    font-family: ${pr => pr.theme.fonts.primary};
    color: ${pr => pr.theme.colors.white};
    border-bottom: 1px solid ${pr => pr.theme.colors.white};
    &:last-child {
        border-bottom: none;
    }

    .p-text span{
        font-weight: bold;
        margin-right: 1rem;
    }

    

  





`