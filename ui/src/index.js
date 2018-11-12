import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from "./store/reducers";
import App from './components/app';

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
);

render(<App store={store} />, document.getElementById('root'));