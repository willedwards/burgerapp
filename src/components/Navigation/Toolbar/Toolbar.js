import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../DrawerToggle/DrawerToggle';

const Toolbar = (props) =>(

    <header className={classes.Toolbar}>
        <div>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
        </div>
        <div className={classes.Logo} >
        <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);

export default Toolbar;