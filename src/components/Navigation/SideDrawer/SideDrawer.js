import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    else{
        attachedClasses = [classes.SideDrawer,classes.Close];
    }

    //...
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.toggled}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default SideDrawer;