import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/berry-twitch/action-creators'

const initialFormValues = {
    accessToken: '',
    clientId: '',
    clientSecret: '',
    refreshToken: '',
}

function ConfigureBot(props) {
    const { botConfig, configureBerry } = props;
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        configureBerry(formValues);
    }


  return (
    <form>
        <label> 
            <span>Access Token: </span>
        </label>
        <input
            type="text"
            name="accessToken"
            value={formValues.accessToken}
            onChange={handleChange}
        />
        <label>
            <span>Client Id: </span>
        </label>
        <input
            type="text"
            name="clientId"
            value= {formValues.clientId}
            onChange={handleChange}
        />
        <label>
            <span>Client Secret: </span>
        </label>
        <input
            type="text"
            name="clientSecret"
            value={formValues.clientSecret}
            onChange={handleChange}
        />
        <label>
            <span>Refresh Token: </span>
        </label>
        <input
            type="text"
            name="refreshToken"
            value={formValues.refreshToken}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

const mapStateToProps = (state) => {
    return {
        botConfig: state.botConfig
    }
}

export default connect(mapStateToProps, action)(ConfigureBot)