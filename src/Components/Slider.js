import React from "react"
import classes from './News.css';


const Slider = ({ onChange, sliderValue }) => {
    const handleSliderChange = (event) => {
        const value = event.target.value;
        if (typeof onChange === 'function') {
            onChange(parseInt(value, 10));
        }
    };

    return (
        <div>
            <input
                type="range"
                min="0"
                max="50"
                value={sliderValue}
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default Slider;
