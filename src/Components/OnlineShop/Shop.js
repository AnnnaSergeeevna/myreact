

import React, { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import Mapbx from "./Mapbx";
import { v4 as uuidv4 } from "uuid";
import classes from '../../App.css';
import Item from "./Item";
import Preloader from "../../Components/Common/Preloader"

export default function Shop(props) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false);
    const [items, setItems] = useState(() => {
        const storedItems = JSON.parse(localStorage.getItem("items"));
        return storedItems || [];
    }
    );


    // useEffect(() => {
    //     if (items.length === 0) {
    //         document.title = "Shopping cart is empty";
    //     } else {
    //         document.title = `${items.length} goods`;
    //     }
    // }, [items]);


    useEffect(() => {
        setLoader(true);
        fetch("https://learn.guidedao.xyz/api/student/products")
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setLoader(false));
    }, [])

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items]);

    function handleFormSubmit(event) {
        const id = uuidv4();
        const newItem = {
            id: 'id',
            name: name,
            desc: desc,
            image: image
        };
        setItems([...items, newItem]);
        setName("");
        setDesc("");
        setImage("");
        setId("")
    }

    function removeItem(id) {
        setItems(items.slice(1));
    }

    return (
        <>
            <h3>These goods fetch from server</h3>
            {/* <div>
                <AddItemForm
                    items={items}
                    id={id}
                    name={name}
                    desc={desc}
                    image={image}
                    onNameChange={(event) => setName(event.target.value)}
                    onDescChange={(event) => setDesc(event.target.value)}
                    onFormSubmit={handleFormSubmit}
                />
            </div> */}
            <div>
                {items.length > 0 ? (
                    <ItemList items={items} id={id} name={name} desc={desc} image={image}
                        removeItem={removeItem}
                    />
                ) : (
                    <p></p>
                )}
            </div>
            <div>
                <Mapbx />
            </div>
        </>
    );
}
