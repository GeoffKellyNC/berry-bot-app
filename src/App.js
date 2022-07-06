import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



//components 
import Header from './components/header/Header';
import Home from './views/Home';
import ConfigureBot from './views/ConfigureBot';





const App = () => {
  

     

    return (
        <>
            <Router>
                <Header />
                <div>
                    <Routes>
                        <Route path="/configure" element = {<ConfigureBot />} />
                        <Route exact path="/" element = {<Home />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}



export default App;