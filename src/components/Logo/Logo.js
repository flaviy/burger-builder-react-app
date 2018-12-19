import React from 'react';
import classes from './Logo.css'

import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = props => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt={"MyBurger"} />
        </div>
    );
};

export default Logo;
