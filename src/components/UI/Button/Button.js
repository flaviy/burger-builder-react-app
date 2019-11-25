import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return (
        <button
          className={[classes.Button, classes[props.buttype], props.disabled ? classes.Disabled : '' ].join(' ')}
          onClick={props.clicked}
          disabled={props.disabled}
        >{props.children}
        </button>
    );
};

export default button;
