import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuidControls/BuildControls";

const INGREDIENT_PRICES = {
    salad : 1.5,
    bacon : 3.8,
    meat: 5.7,
    cheese : 1.6,
}

const BASE_PRICE = 3;

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        const ingredients = {
            salad: 2,
            bacon: 2,
            meat: 2,
            cheese: 1
        }
        this.state = {
            ingredients: ingredients,
            totalPrice: this.getPrice(ingredients)
        }
    }

    state  = {}

    getPrice = (updatedIngredients) => {
        const price = Object.keys(INGREDIENT_PRICES).reduce((previousValue, currentValue) => {
                return previousValue + updatedIngredients[currentValue] * INGREDIENT_PRICES[currentValue]
            }, BASE_PRICE
        )
        console.log(price);
        return price;
    }


    addIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        const updatedCount = oldValue + 1;
        this.updateState(type, updatedCount, INGREDIENT_PRICES[type]);
    }

    updateState = (type, updatedCount) =>  {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        this.setState({ingredients : updatedIngredients, totalPrice : this.getPrice(updatedIngredients) });
        console.log(this.state);
    }

    removeIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        const updatedCount = oldValue > 1 ? oldValue - 1 : 0;
        this.updateState(type, updatedCount);
    }

    render() {
        return (
            <Aux>
                <div> Price : {this.state.totalPrice.toFixed(2)}</div>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredientsAdded = {this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;