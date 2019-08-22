import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';

const CheckoutSummary = (props) => {
  return  (
    <div className={classes.summary}>
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked>Cancel</Button>
      <Button
        btnType="Success"
        clicked>Confirm</Button>
    </div>
  )
};

export default CheckoutSummary;
