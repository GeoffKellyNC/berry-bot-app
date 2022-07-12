import './master-css/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {ThemeProvider} from 'styled-components';

import App from './App';
import reducer from './store/rootreducer'
import theme from './theme/theme';

// Initiating Redux Dev Tools and store
const composeWithDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store =
    legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// Rendering App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
  </React.StrictMode>
);