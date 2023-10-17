
import React, { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import Mapbx from "./Mapbx";
import { v4 as uuidv4 } from "uuid";
import classes from '../../App.css';
import Item from "./Item";
import Preloader from "../../Components/Common/Preloader"


export default function Shop(props) {
    const [items, setItem] = useState(() => {
        const value = localStorage.getItem("items")
        return JSON.parse(localStorage.getItem("items")) || [];
    });
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])
    useEffect(() => {
        if (items.length === 0) {
            document.title = "Shopping cart is empty";
            console.log(items.length)
        } else {
            document.title = `${items.length} goods`;
            console.log(items.length)
        }
    }, [items]);
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
    }, []);

    function handleFormSubmit(event) {
        const id = uuidv4();
        const newItem = {
            id: id,
            name: name,
            desc: desc,
            image: image
        };
        setItem([...items, newItem]);
        console.log("Set")
        setName("");
        setDesc("");
        setImage("");
    }

    function removeItem() {
        setItem(items.slice(1));
    }

    return (
        <>
            <h3>Choose your goods</h3>
            <div>
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


