import React, { useState } from "react";
import Item from "./Item.js";
import styles from '../../App.css';


export default function ItemList(props) {
    return <ul className="ui-list">
        {props.items.map((item, index) => (
            <li className="ui-item-list" key={item.id} style={{ display: props.items.length === 1 ? 'none' : 'block' }}>
                <Item info={item} />
                <button className="item-button" onClick={props.removeItem} >
                    Delete
                </button>
            </li>
        ))}
    </ul>
}