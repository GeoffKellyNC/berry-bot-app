import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/berry-twitch/action-creators';
import { Route } from 'react-router-dom';

//components 
import Home from './views/Home';




const App = (props) => {
    const { 
        target,
        setTarget } = props;

    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            
            <p>Target: {target}</p>
        </div>
    );
}

const mapSateToProps = (state) => {
    return {
        target: state.target
    }
}


export default connect(mapSateToProps, actions)(App);