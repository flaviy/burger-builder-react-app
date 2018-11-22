import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuidControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";


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
        const totalPrice = this.getPrice(ingredients);
        this.state = {
            ingredients: ingredients,
            totalPrice: totalPrice,
            purchasable : this.checkIfPurchasable(totalPrice),
            purchasing : false
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

    checkIfPurchasable = (price) => price > BASE_PRICE


    addIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        const updatedCount = oldValue + 1;
        this.updateState(type, updatedCount, INGREDIENT_PRICES[type]);
    }

    updateState = (type, updatedCount) =>  {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const totalPrice = this.getPrice(updatedIngredients);
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : this.getPrice(updatedIngredients),
            purchasable : this.checkIfPurchasable(totalPrice)
        });
        console.log(this.state);
    }

    removeIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        if(oldValue === 0) {
            return;
        }
        this.updateState(type, oldValue - 1 );
    }

    purchaseHandler = () => {
        this.setState({'purchasing' : true});
    }

    purchaseCancelHandler = () => {
        this.setState({'purchasing' : false});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredientsAdded = {this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice.toFixed(2)}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;