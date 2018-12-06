import React from 'react';
import { render } from 'react-dom';
import App from './pages/app';
import { configureStore } from './store/store';
import './index.scss'

const store = configureStore();

render( <App store={store} />, document.getElementById('root'));

