import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <HamburgerMenu clicked={props.sideDrawerTrigger} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;
