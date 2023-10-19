
import React, { useState } from "react";
import Item from "./Item.js";
import styles from '../../App.css';


export default function ItemList(props) {
    const { removeItem } = props
    return <ul className="ui-list">
        {props.items.flat(2).map((item) => (
            <li className="ui-item-list" key={item.id} >
                <Item info={item}
                // removeItem={removeItem} 
                />
            </li>
        ))}
    </ul>
}