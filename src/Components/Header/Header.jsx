import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.head}>
            {/* <img src='../headerLogo.png' />  */}
            My Portfolio
            <div>
                {/* <button className={classes.login}>{props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
                </button> */}
            </div>
        </div>
    )
}
export default Header;