import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuidControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
  salad: 1.5,
  bacon: 3.8,
  meat: 5.7,
  cheese: 1.6,
}

const BASE_PRICE = 3

class BurgerBuilder extends Component {

  constructor (props) {
    super(props)
    //const totalPrice = this.getPrice(ingredients)
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    }
  }

  state = {}

  componentDidMount () {
    axios.get('/ingredients.json').then(
      response => {
        if (response.data) {
          let totalPrice = this.getPrice(response.data)
          this.setState({
              ingredients: response.data,
              totalPrice: totalPrice,
              purchasable: this.checkIfPurchasable(totalPrice),
              purchasing: false,
              loading: false,
            },
          )
        } else {
          this.setState({ error: true });
        }

      },
    ).catch(error => {this.setState({ error: true })},
    )

  }

  getPrice = (updatedIngredients) => {
    const price = Object.keys(INGREDIENT_PRICES).reduce((previousValue, currentValue) => {
          return previousValue + updatedIngredients[currentValue] *
            INGREDIENT_PRICES[currentValue]
        }, BASE_PRICE,
      )
    console.log(price)
    return price
  }

  checkIfPurchasable = (price) => price > BASE_PRICE

  addIngredientHandler = (type) => {
    const oldValue = this.state.ingredients[type]
    const updatedCount = oldValue + 1
    this.updateState(type, updatedCount, INGREDIENT_PRICES[type])
  }

  updateState = (type, updatedCount) => {
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = updatedCount
    const totalPrice = this.getPrice(updatedIngredients)
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.getPrice(updatedIngredients),
      purchasable: this.checkIfPurchasable(totalPrice),
    })
  }

  removeIngredientHandler = (type) => {
    const oldValue = this.state.ingredients[type]
    if (oldValue === 0) {
      return
    }
    this.updateState(type, oldValue - 1)
  }

  purchaseHandler = () => {
    this.setState({ 'purchasing': true })
  }

  purchaseCancelHandler = () => {
    this.setState({ 'purchasing': false })
  }

  purchaseContinuedHandler = () => {
    const queryParams = [];
    for(let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price='+this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      'pathname' : '/checkout',
      'search' : '?' + queryString
    });
    return;
    //alert('Lets continue');

  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients,
    }
    let burger = this.state.error ? 'Ingredients can\'t be loaded' : <Spinner/>;
    let orderSummary = null;
    if(this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls ingredientsAdded={this.addIngredientHandler}
                         ingredientsRemoved={this.removeIngredientHandler}
                         disabled={disabledInfo}
                         price={this.state.totalPrice.toFixed(2)}
                         purchasable={this.state.purchasable}
                         ordered={this.purchaseHandler}
          /></React.Fragment>);
      orderSummary =
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinuedHandler}
          price={this.state.totalPrice.toFixed(2)}
        />
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    if (this.state.loading) {
      orderSummary = <Spinner/>
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}
               modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)