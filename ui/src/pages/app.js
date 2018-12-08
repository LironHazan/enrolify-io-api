import React from 'react';
import { Provider } from 'react-redux';
import { ThemeConsumer, ThemeProvider } from '../theme/theme-context';
import Slider from '../components/slider/slider';
import Home from './back-office/home';
import './app.scss';

const App = ({ store }) => (
    <ThemeProvider>
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <Provider store={store}>
                    <main className="app">
                        <section className={theme}>
                            <Slider toggleTheme={toggleTheme} theme={theme}/>
                            <Home/>
                        </section>
                    </main>
                </Provider>
            )}
        </ThemeConsumer>
    </ThemeProvider>

);

export default App;