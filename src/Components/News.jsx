import React, { useState, useEffect } from "react"
import classes from './News.css';
import Cards from "./Cards";

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
        <p>2 Oct 2023, 17:35:47. I added animated Cards, they appear randomly from the API <Cards /></p>
        <div className="time">{date.toLocaleTimeString()}</div>
    </>

}
export default News;