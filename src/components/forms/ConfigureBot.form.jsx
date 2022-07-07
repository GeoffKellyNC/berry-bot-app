import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../../store/berry-twitch/action-creators'
import styled from 'styled-components';

const initialFormValues = {
    accessToken: '',
    clientId: '',
    clientSecret: '',
    refreshToken: '',
}

function ConfigureBot(props) {
    const { botConfig, configureBerry } = props;
    const [formValues, setFormValues] = useState(initialFormValues);

    let navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        configureBerry(formValues);
        await setFormValues(initialFormValues);
        navigate('/');
    }


  return (
    <ConfigureBotStyled>
        <label> 
            <span>Access Token: </span>
        </label>
        <input
            type="text"
            name="accessToken"
            value={formValues.accessToken}
            onChange={handleChange}
            className = 'access-token-text-input'
        />
        <label>
            <span>Client Id: </span>
        </label>
        <input
            type="text"
            name="clientId"
            value= {formValues.clientId}
            onChange={handleChange}
            className = 'client-id-text-input'
        />
        <label>
            <span>Client Secret: </span>
        </label>
        <input
            type="text"
            name="clientSecret"
            value={formValues.clientSecret}
            onChange={handleChange}
            className = 'client-secret-text-input'
        />
        <label>
            <span>Refresh Token: </span>
        </label>
        <input
            type="text"
            name="refreshToken"
            value={formValues.refreshToken}
            onChange={handleChange}
            className = 'refresh-token-text-input'
        />
        <button onClick={handleSubmit}
            className = 'configure-bot-button'
                >Submit</button>
    </ConfigureBotStyled>
  )
}

const mapStateToProps = (state) => {
    return {
        botConfig: state.botConfig
    }
}

export default connect(mapStateToProps, action)(ConfigureBot)


const ConfigureBotStyled = styled.div`
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    label {
        display: block;
        margin-bottom: 1%;
    }

    input {
        width: 25%;
        margin-bottom: 1%;
        padding: 0.5%;
        border: 1px solid ${pr => pr.theme.colors.secondary};
        border-radius: 5px;
        font-size: ${pr => pr.theme.fontSizes.medium};
        color: ${pr => pr.theme.colors.berry};
    }
    

`


