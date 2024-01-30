import React, { useState, useEffect } from "react"
import classes from './News.css';
import Cards from "./Cards";
import RNBW from "./RNBW";
import { NavLink } from 'react-router-dom';



function News({ onChange, sliderValue }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const handleSliderChange = (value) => {

        // setSliderValue(value);
        if (typeof onChange === 'function') {
            onChange(value);
        }
    };

    const blockStyles = {
        backgroundColor: `rgb(${(200 - sliderValue) * 1.26}, ${(200 - sliderValue) * 1.06}, ${(200 - sliderValue) * 0.86})`,

    };

    return (
        <>
            <div className="blockStyles" style={blockStyles}>
                <h2>News</h2>
                <p>2 Oct 2023, 17:35:47. I added animated Cards, they appear randomly from the API <Cards /></p>
                <p>12 Nov 2023, 15:07:12. You may create rainbow buttons <RNBW /></p>
                <p>30 Jan 2024, 11:46:00. My current project is here<button className='buttonFP'><NavLink to="/foodplan" className={navData => navData.isActive ? classes.active : classes.item}>Food Plan</NavLink></button>
                </p>
                {/* <p>14 Dec 2023, 12:26:00. Make the background a comfortable tone with Slider <Slider onChange={handleSliderChange} sliderValue={sliderValue} /></p> */}
                <div className="time">{date.toLocaleTimeString()}</div>
            </div>
        </>
    )
}
export default News;

