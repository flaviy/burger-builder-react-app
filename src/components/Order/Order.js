import React from 'react';
import classes from "./Order.css";

const order = (props) => {
  let ingredients = [];
  for(let ingredientName in props.ingredients) {
    ingredients.push({'name' : ingredientName, 'amount' : props.ingredients[ingredientName]});
  }
  const ingredientOutput = ingredients.map((ingredient, index) => {
    let separator = '';
    if(index < ingredients.length - 1) {
      separator = ',';
    }
    let returnValue =  <span key={ingredient.name}>{ingredient.name} : {ingredient.amount} {separator} </span>;

    return returnValue;
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientOutput}</p>
      <p>Price : {Number.parseFloat(props.price).toFixed(2)}$</p>
    </div>
  )
}
export default order;