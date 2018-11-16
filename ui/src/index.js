import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { configureStore } from './store/store';
const store = configureStore();

render(<App store={store} />, document.getElementById('root'));

