import React, {Component} from 'react';
import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";

class OrderSummary extends Component {

  componentWillUpdate (nextProps, nextState, nextContext) {
      console.log('[OrderSummary] WillUpdate');
  }
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return <li key={igKey}><span
          style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
      });
    return (
      <Aux>
        <h3>Your Order</h3>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price}</strong></p>
        <p>Continue to checkout?</p>
        <Button buttype="Danger"
                clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button buttype="Success"
                clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  };
}

export default OrderSummary;
