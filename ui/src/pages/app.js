import React from 'react';
import { Provider } from 'react-redux';
import './app.scss';

import Home from './back-office/home';

const App = ({ store }) => (
    <Provider store={store}>
        <div className="app">
            <Home />
        </div>
    </Provider>
);

export default App;