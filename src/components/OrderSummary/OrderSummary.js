import React from 'react';
import Aux from "../../hoc/Aux";

const orderSummary = (props) => {
    console.log(props.ingredients);
    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default orderSummary;
