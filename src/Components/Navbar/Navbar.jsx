import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 500);
    };
    return <nav className={classes.nav}>
        <div className={`${classes.item} ${isActive ? classes.active : ''}`} onClick={handleClick}>
            <NavLink to="/about" className={navData => navData.isActive ? classes.active : classes.item}>About me</NavLink></div>
        <div className={classes.item}><NavLink to="/animation" className={navData => navData.isActive ? classes.active : classes.item}>Animation</NavLink></div>
        {/* <div className={classes.item}><NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink></div> */}
        <div className={`${classes.item} ${isActive ? classes.active : ''}`} onClick={handleClick}>
            <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink></div>
        <div className={`${classes.item} ${isActive ? classes.active : ''}`} onClick={handleClick}>
            <NavLink to="/online-shop" className={navData => navData.isActive ? classes.active : classes.item}>Online-shop</NavLink></div>
        <div className={`${classes.item} ${isActive ? classes.active : ''}`} onClick={handleClick}>
            <NavLink to="/payment" className={navData => navData.isActive ? classes.active : classes.item}>Payment</NavLink></div>
        <div className={`${classes.item} ${isActive ? classes.active : ''}`} onClick={handleClick}>
            <NavLink to="/tictactoe" className={navData => navData.isActive ? classes.active : classes.item}>TicTacToe</NavLink></div>
        <div className={`${classes.item} ${isActive ? classes.active : ''}`} onClick={handleClick}>
            <NavLink to="/foodplan" className={navData => navData.isActive ? classes.active : classes.item}>Food Plan</NavLink></div>
    </nav>;
}

export default Navbar;

