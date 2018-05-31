import React from 'react';
import classes from './Menu.css';

const Menu = (props) => (
        <div onClick={props.clicked} className={classes.Menu}>
        <p>Menu</p>
        </div>
)

export default Menu;