import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) =>
    (
        <ul className={classes.NavigationItems}>
            <NavigationItem href="/">Burger Builder</NavigationItem>
            <NavigationItem href="/orders">Orders</NavigationItem>
        </ul>
    );


export default NavigationItems;