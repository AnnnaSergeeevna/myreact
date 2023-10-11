import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import { v4 as uuidv4 } from "uuid";



export default function AddItemForm(props) {
    useEffect(() => {
        const selectElement = document.getElementById('name');

        const handleChange = () => {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            console.log(`Выбран пункт: ${selectedOption.text}`);
        }
        selectElement.addEventListener('change', handleChange);
    })

    return <form onSubmit={props.onFormSubmit}>
        <div>
            <p>
                <label htmlFor="name">
                    <span></span>
                </label>
                <select type="text" id="name" placeholder="coffeeName" className="ui-textfield" value={props.name} onChange={props.onNameChange} required>
                    <option value="">Сhoose your goods</option>
                </select>
            </p>
        </div>
        <div className="form-footer">
            <div className="validation"></div>
            <input type="submit" className="ui-button" value="Add" />
        </div>
    </form>
}

