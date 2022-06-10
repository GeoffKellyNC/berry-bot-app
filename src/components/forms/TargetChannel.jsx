import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/berry-twitch/action-creators'


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
        <form onSubmit={handleSubmit}>
            <label>
                Target:
                <input 
                    type="text" 
                    value = {formValues.target} 
                    onChange={handleChange} 
                    name="target"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}


const mapStateToProps = (state) => {
    return {
        target: state.target
    }
}


export default connect(mapStateToProps, action)(TargetChannel)