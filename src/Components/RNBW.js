
import React, { useState } from "react";
import classes from './News.css';

const RNBW = () => {
  const [items, setItems] = useState([]);
  const [idCount, setIdCount] = useState(0);


  const handleAddButton = () => {
    const newItem = {
      id: idCount
    };
    setItems([...items, newItem]);
    setIdCount(idCount + 1);
  }
  const handleDeleteButton = () => {
    if (items.length > 0) {
      setItems(items.slice(1));
    }
  }
  return (
    <>
      <button onClick={handleAddButton}
        type='button'
        className="addButton"
      >
        Add Button
      </button>
      <div>
        <ul className="ui-list">
          {items.map((item) => (
            <li className="ui-item-list" key={item.id}>
              <button className={`deleteButton color-${item.id % 6}`} onClick={handleDeleteButton}>
                {item.id % 6 === 0 && 'Richard'}
                {item.id % 6 === 1 && 'Of'}
                {item.id % 6 === 2 && 'York'}
                {item.id % 6 === 3 && 'Gave'}
                {item.id % 6 === 4 && 'In'}
                {item.id % 6 === 5 && 'Vain'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default RNBW;



