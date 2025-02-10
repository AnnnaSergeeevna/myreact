import { useState } from "react";
import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 500);
    };
    return (
        <div>
            <button className={`${classes.menuBttn} ${isActive ? classes.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
                Menu
            </button>
            {isOpen && (
                <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
                    <li><a href="/about">About</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/online-shop">Online-shop</a></li>
                    <li><a href="/payment">Payment</a></li>
                    <li><a href="/tictactoe">TicTacToe</a></li>
                    <li><a href="/animation">Animation</a></li>
                    <li><a href="/foodplan">Food Plan</a></li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
