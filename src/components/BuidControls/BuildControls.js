import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {'label' : 'Salad', 'type' : 'salad'},
    {'label' : 'Meat', 'type' : 'meat'},
    {'label' : 'Cheese', 'type' : 'cheese'},
    {'label' : 'Bacon', 'type' : 'bacon'},

]

const BuildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <div> Price : <strong>{props.price}</strong></div>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW!</button>
        </div>
    );
};

BuildControls.propTypes = {

};

export default BuildControls;
