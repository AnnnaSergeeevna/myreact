import React, { useEffect, useState } from "react";
import classes from './CoffeeShop.css';

export default function Item(props) {
    const [total, setTotal] = useState(1);
    // const [free, setFree] = useState(0)

    const { info, removeItem } = props;
    function handleAddClick() {
        // if (total > 0 && (total % 3 === 0)) {
        //     // setFree(free + 1)
        //     setTotal(total + 1)
        // } else {
        setTotal(total + 1)
        // }
    }
    function handleRemoveClick() {
        // if (total > 0 && (total % 3 === 0)) {
        //     setTotal(total - 1)
        // setFree(free - 1)
        // } else {
        if (total > 0) {
            setTotal(total - 1);
        }
        // }
    }
    if (!info) {
        return null;
    }
    return (
        <div className="item">
            <div className="item-info">
                <fieldset>
                    <legend>{info.name}</legend>
                    <p className="items-desc">{info.desc}</p>
                    <div>
                        <img src={info.image} className="items-image" alt="" />                </div>
                    <div className="item-quantity">
                        <button
                            className="item-button"
                            disabled={total <= 1}
                            onClick={handleRemoveClick}
                        >
                            -
                        </button>
                        <h3 className="item-total">{total ? total : ""}</h3>
                        <button className="item-button"
                            onClick={handleAddClick}>
                            +
                        </button>
                    </div>
                </fieldset>
            </div>

            {/* <div className="item-info">
                <h3>Free: {free}</h3>

            </div> */}
            <button className="item-button" onClick={removeItem} >
                Add to cart
            </button>
        </div >
    );
}
