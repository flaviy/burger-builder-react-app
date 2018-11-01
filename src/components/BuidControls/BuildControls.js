import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {'label' : 'Salad', 'type' : 'Salad'},
    {'label' : 'Meat', 'type' : 'meat'},
    {'label' : 'Cheese', 'type' : 'cheese'},
    {'label' : 'Bacon', 'type' : 'bacon'},

]

const BuildControls = props => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label = {ctrl.label} />
            ))}
        </div>
    );
};

BuildControls.propTypes = {

};

export default BuildControls;
