
import React, { useState } from "react";
import Item from "./Item.js";
import styles from '../../App.css';


export default function ItemList(props) {
    return <ul className="ui-list">
        {props.items.map((item) => (
            <li className="ui-item-list" key={item.id} >
                <Item info={item} />
                <button className="item-button" onClick={props.removeItem} >
                    Delete
                </button>
            </li>
        ))}
    </ul>
}