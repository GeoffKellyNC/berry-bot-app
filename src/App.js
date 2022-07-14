import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from 'styled-components';


//components 
import Nav from './components/header/Nav';
import Home from './views/Home';
import ConfigureBot from './views/ConfigureBot';
import Console from './views/Console'


const App = () => {



    return (
        <>
            <Router>
                <Nav />
                <AppContainer className='app-container'>
                    <Routes>
                        <Route path = '/console' element = {<Console />} />
                        <Route path="/configure" element = {<ConfigureBot />} />
                        <Route exact path="/" element = {<Home />} />
                    </Routes>
                </AppContainer>
            </Router>
        </>
    );
}


export default App;


const AppContainer = styled.div`
    max-width: 85%;
    margin: 0 0 0 auto;

`