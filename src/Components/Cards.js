import React, { useState, useEffect } from "react"
import { render } from "react-dom"
import Preloader from "../Components/Common/Preloader"
import classes from './News.css';


export default function Cards() {
    const [cards, setCards] = useState()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setCards(data.cards)
                }
            })
            .catch(error => {
                setLoader(false)
                console.error(error)
            })
            .finally(() => setLoader(false))

    }, [])

    return (
        <>
            <h1>Cards:</h1>
            <div className="cards">
                {loader && <Preloader />}
                {cards && cards.map(card => (
                    <li key={card.code}>
                        <img className={classes.cards} src={card.image} alt={card.code} />
                    </li>
                ))}
            </div>
        </>
    );
}