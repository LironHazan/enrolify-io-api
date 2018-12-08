import React from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext()

export class ThemeProvider extends React.Component {
    toggleTheme = evt => {
        this.setState({ theme: evt.target.checked ? 'light' : 'dark' });
      };
    
      state = {
        theme: 'light',
        toggleTheme: this.toggleTheme
      };
    
      render() {
        return (
          <ThemeContext.Provider value={this.state}>
            {this.props.children}
          </ThemeContext.Provider>
        );
      }
}

ThemeProvider.propTypes = {
    children: PropTypes.any
  };