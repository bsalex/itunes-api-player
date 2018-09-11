import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App/AppContainer';
import {Provider} from 'react-redux';
import store from './store';

import '../node_modules/normalize.css/normalize.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    rootElement
);
