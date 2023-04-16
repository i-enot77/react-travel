import React from 'react';
import '../assets/style/Slider.css';

const Slider = ({content:{className, title, text, subtitle}, children}) => {
    return (
      <>
        <div className={className}>
            <div className="slider_content">
              <h2>{title}<span>{text}</span></h2>
              <p className="slider_text">{subtitle}</p>
              {children}
            </div>
        </div>
      </>
    )
  }
  export default Slider;