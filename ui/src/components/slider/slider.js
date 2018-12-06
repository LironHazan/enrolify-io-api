import React from 'react';
import { ThemeConsumer } from '../../theme/theme-context';
import './slider.scss';

const Slider = () => {

return (
          <label className="switch">
          <ThemeConsumer>
            {({ toggleTheme, theme }) => (
              <input
                onChange={toggleTheme}
                type="checkbox"
                checked={theme === "light"}
              />
            )}
          </ThemeConsumer>
          <span className="slider round" />
    </label> )
}

    
export default Slider;