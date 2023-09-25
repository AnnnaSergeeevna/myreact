import React, { useState, useEffect } from "react"
import classes from '../../src/App.css';

function News() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return <>
        <h2>News</h2>
        <div className="time">{date.toLocaleTimeString()}</div>
    </>

}
export default News;