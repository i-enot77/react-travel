import React from 'react';
import '../assets/style/Slider.css';

const Slider = ({name, name2, title, subtitle, children}) => {
    return (
      <div className={name}>
            <div className={name2}>
              <div className="slider_content">
              {title}
              <p className="slider_text">{subtitle}</p>
              {children}
            </div>
          </div>
      </div>
    )
  }
  
  export default Slider;