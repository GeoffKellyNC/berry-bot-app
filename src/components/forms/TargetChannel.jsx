import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/berry-twitch/action-creators'
import styled from 'styled-components';


const initialFormValues = {
    target: ''
}


function TargetChannel(props) {
    const { 
        target, 
        setTarget} = props

    //State
    const [formValues, setFormValues] = useState(initialFormValues);
    
    //Form Handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        setTarget(formValues.target);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return (
        <TargetForm onSubmit={handleSubmit}>
            <label>Set Target Channel:</label>
                <input 
                    type="text" 
                    value = {formValues.target} 
                    onChange={handleChange} 
                    name="target"
                    className = 'target-text-input'
                />
            <button type="submit">Submit</button>
        </TargetForm>
    )
}


const mapStateToProps = (state) => {
    return {
        target: state.target
    }
}


export default connect(mapStateToProps, action)(TargetChannel)

const TargetForm = styled.form`
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    color: white;
    margin: 2% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    label {
        display: block;
        margin-bottom: 1%;
    }

    input {
        width: 20em;
        margin-bottom: 1%;
        padding: 0.5%;
        border: 1px solid ${pr => pr.theme.colors.secondary};
        border-radius: 5px;
        font-size: ${pr => pr.theme.fontSizes.medium};
        color: ${pr => pr.theme.colors.berry};
    }
    


`