import React from 'react';
import BurgerLogoImg from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogoImg} alt="My Burger" />
    </div>
);

export default Logo;