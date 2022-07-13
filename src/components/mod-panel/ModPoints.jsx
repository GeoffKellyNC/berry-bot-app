import React, { useState } from 'react'
import styled from 'styled-components'

import PointTable from './PointTable'
import SearchPoints from './SearchPoints.form'


const iFormValues = {
    "term": "",
  }

const ModPoints = ({ pointsData, refreshPointData }) => {
    const [formValues, setFormValues] = useState(iFormValues)
    const [searchTerm, setSearchTerm] = useState('')


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setSearchTerm(value)
    }


  return (
    <PointsStyled>
        <div className = 'points-header'>
            <h1 className='points-title'> Player Moderation Points </h1>
            <div className = 'header-control'>
                <button className='refresh-pnt-btn' onClick={refreshPointData}>Refresh Points</button>
                <SearchPoints formValues={formValues} onChange={handleChange} />
            </div>
        </div>
           {
                searchTerm === '' ?
                pointsData.map((account, index) => {
                    return <PointTable key={index} account={account} />
                }
                ) :
                pointsData.filter(account => account.user.toLowerCase().includes(searchTerm.toLowerCase())).map((account, index) => {
                    return <PointTable key={index} account={account} />
                }
                )
           }
    </PointsStyled>
  )
}

export default ModPoints


const PointsStyled = styled.div`
    border: 1px solid ${pr => pr.theme.colors.white};
    font-family: ${pr => pr.theme.fonts.primary};
    color: ${pr => pr.theme.colors.white};
    padding: 1rem;
    font-size: ${pr => pr.theme.fontSizes.small};
    width: 39%;
    margin-bottom: 1rem; 
    overflow: scroll;
    height: 400px;


    .header-control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;
    }


    .refresh-pnt-btn {
        background-color: ${props => props.theme.colors.secondary};
        border: none;
        color: ${props => props.theme.colors.white};
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: bold;
        padding: 5px;
        margin: 10px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.white};
        }
    }


`



// {
//     pointsData.map(account => {
//         return <PointTable key={account.id} account={account} />
//     })
// }