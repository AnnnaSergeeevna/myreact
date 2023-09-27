import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import Mapbx from "./Mapbx";
import { v4 as uuidv4 } from "uuid";
import classes from '../../App.css';

export default function Shop(props) {
    const [theme, setTheme] = useState({
        uititle: true,
        disabled: false
    });
    const classNames = theme.uititle ? "uititle" : "disabled";

    const [items, setItem] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    function handleFormSubmit(event) {
        event.preventDefault();
        const id = uuidv4();
        const newItem = {
            id: id,
            name: name,
            desc: desc
        };
        if (items.length === 0) {
            setTheme({ ...theme, uititle: false });
        }
        setItem([...items, newItem]);
        setName("");
        setDesc("");
    }

    function removeItem() {
        setItem(items.slice(1));
        if (items.length === 1) {
            setTheme({ ...theme, uititle: true });
        }
    }

    return (
        <>
            <h3 className={classNames}>Choose your drink ☕️</h3>
            <div>
                <AddItemForm name={name} desc={desc} onNameChange={(e) => setName(e.target.value)} onDescChange={(e) => setDesc(e.target.value)} onFormSubmit={handleFormSubmit} />
            </div>
            <div>
            </div>
            <div>
                <ItemList items={items} removeItem={removeItem} />
            </div>
            <div>
                <Mapbx />
            </div>
        </>
    );
}


