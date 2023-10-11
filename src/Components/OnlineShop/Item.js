import React, { useEffect, useState } from "react";

export default function Item(props) {
    const [total, setTotal] = useState(1);
    const [free, setFree] = useState(0)

    const { info } = props;

    function handleAddClick() {
        if (total > 0 && (total % 3 === 0)) {
            setFree(free + 1)
            setTotal(total + 1)
        } else {
            setTotal(total + 1)
        }
    }
    function handleRemoveClick() {
        if (total > 0 && (total % 3 === 0)) {
            setTotal(total - 1)
            setFree(free - 1)
        } else {
            setTotal(total - 1)
        }
    }

    if (!info) {
        return null;
    }

    return (
        <div className="item">
            <div className="item-info">
                <h3 className="item-title">{info.name}</h3>
                {/* <p className="item-desc">{info.desc}</p> */}
            </div>
            <div className="item-quantity">
                <button
                    className="item-button"
                    disabled={total === 0}
                    onClick={handleRemoveClick}
                >
                    -
                </button>
                <h3 className="item-total">{total ? total : ""}</h3>
                <button className="item-button" onClick={handleAddClick}>
                    +
                </button>
            </div>
            <div className="item-info">
                <h3>Free: {free}</h3>

            </div>
        </div>
    );
}
