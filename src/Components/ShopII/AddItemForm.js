

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";



export default function AddItemForm(props) {
    useEffect(() => {
        const selectElement = document.getElementById('name');

        const handleChange = () => {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            props.onNameChange(selectedOption.value);
        }
        selectElement.addEventListener('change', handleChange);
        return () => {
            selectElement.removeEventListener("change", handleChange);
        };
    }, [props.onNameChange]);
    const { items, name, onNameChange, onDescChange, onFormSubmit } = props;
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <p>
                    <label htmlFor="name">
                        <span>Choose your goods:</span>
                    </label>
                    <select
                        type="text"
                        id="name"
                        className="ui-textfield"
                        onChange={onNameChange}
                        required>
                        <option value="">Select an item</option>
                        {items.flat(3).map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </p>
            </div>
            <div className="form-footer">
                <div className="validation"></div>
                <input type="submit" className="ui-button" value="Add" onClick={(e) => {
                    e.preventDefault();
                    onFormSubmit()
                }} />
            </div>
        </form>
    );
}