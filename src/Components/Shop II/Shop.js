

import React, { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import Mapbx from "./Mapbx";
import { v4 as uuidv4 } from "uuid";
import classes from '../../App.css';
import Item from "./Item";
import Preloader from "../../Components/Common/Preloader"


export default function Shop(props) {
    const [theme, setTheme] = useState({
        uititle: true,
        disabled: false
    });
    const classNames = theme.uititle ? "uititle" : "disabled";

    const [items, setItem] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        fetch("https://learn.guidedao.xyz/api/student/products")
            .then((response) => response.json())
            .then((data) => {
                setItem(data);
            })

            .catch(error => {
                console.error(error)
            })
            .finally(() => setLoader(false))
    }, []);

    function handleFormSubmit(event) {
        const id = uuidv4();
        const newItem = {
            id: id,
            name: name,
            desc: desc,
            image: image
        };

        if (items.length === 0) {
            setTheme({ ...theme, uititle: false });
        }

        setItem([...items, newItem]);
        setId("");
        setName("");
        setDesc("");
        setImage("");
    }

    function removeItem() {
        setItem(items.slice(1));
        if (items.length === 1) {
            setTheme({ ...theme, uititle: true });
        }
    }

    return (
        <>
            <h3 className={classNames}>Choose your goods</h3>
            <div>
                <AddItemForm
                    items={items}
                    id={id}
                    name={name}
                    desc={desc}
                    image={image}
                    onNameChange={(e) => setName(e.target?.value)}
                    onDescChange={(e) => setDesc(e.target.value)}
                    onFormSubmit={handleFormSubmit}
                />
            </div>
            <div>
                <ItemList items={items} id={id} name={name} desc={desc} image={image} removeItem={removeItem} />
            </div>
            <div>
                <Mapbx />
            </div>
        </>
    );
}


