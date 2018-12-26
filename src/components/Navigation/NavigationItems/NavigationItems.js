import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) =>
    (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/" active>Burger Builder</NavigationItem>
            <NavigationItem href="/">Checkout</NavigationItem>
        </ul>
    );


export default NavigationItems;