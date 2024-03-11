import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.item}><NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink></div>
        {/* <div className={classes.item}><NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink></div> */}
        <div className={classes.item}><NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink></div>
        <div className={classes.item}><NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink></div>
        <div className={classes.item}><NavLink to="/online-shop" className={navData => navData.isActive ? classes.active : classes.item}>Online-shop</NavLink></div>
        <div className={classes.item}><NavLink to="/payment" className={navData => navData.isActive ? classes.active : classes.item}>Payment</NavLink></div>
        <div className={classes.item}><NavLink to="/tictactoe" className={navData => navData.isActive ? classes.active : classes.item}>TicTacToe</NavLink></div>
        <div className={classes.item}><NavLink to="/foodplan" className={navData => navData.isActive ? classes.active : classes.item}>Food Plan</NavLink></div>
    </nav>;
}

export default Navbar;