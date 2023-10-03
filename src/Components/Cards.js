import React, { useState } from "react"
import { render } from "react-dom"
import Preloader from "../Components/Common/Preloader"
import classes from './News.css';


export default function Cards() {
    const [cards, setCards] = useState()
    const [loader, setLoader] = useState(false)

    function handleButtonClick() {
        setLoader(true)
        fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3")
            .then(response => response.json())
            .then(data => {
                if (data && data.cards) {
                    setCards(data.cards)
                }
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setLoader(false))
    }

    return <>
        <div className="button">
            <button onClick={handleButtonClick} disabled={loader}>Push for download cards</button>
        </div>
        <h3>Cards:</h3>
        <div className="cards">
            {loader && <Preloader />}
            {cards && cards.map(card => (
                <li key={card.code}>
                    <img className={classes.cards} src={card.image} alt={card.code} />
                </li>
            ))}
        </div>
    </>
}


