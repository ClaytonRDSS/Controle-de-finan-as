import React from 'react';
import ReactDOM from 'react-dom';

import reducers from './main/reducers'
import App from './main/app'
import promise from 'redux-promise';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise) (createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
        {/*<App /> */}
    </Provider>,
document.getElementById('app'));

