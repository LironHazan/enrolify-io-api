import React from 'react';
import './slider.scss';

const Slider = ({ toggleTheme, theme }) => {

return (
          <label className="switch">
              <input
                onChange={toggleTheme}
                type="checkbox"
                checked={theme === "light"}
              />
          <span className="slider round" />
    </label> )
}

    
export default Slider;