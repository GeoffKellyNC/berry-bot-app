import React, { useState } from 'react';

const initialFormValues = {
    target: ''
}

const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
        ...formValues,
        [name]: value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/', formValues)
}

const App = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    return (
        <div>
            <h1>Hello World</h1>
            <form>
                <label>
                    Target:
                    <input type="text" value={formValues.target} onChange={(e) => onChange(e)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;