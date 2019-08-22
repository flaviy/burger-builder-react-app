import React, {Component} from 'react';
import classes from './Checkout.css';
import CheckoutSummary from './../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients : {
      salad: 1,
      meat : 2,
      cheese : 1
    }
  }

  render () {
    return(
      <div>
          <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default Checkout;