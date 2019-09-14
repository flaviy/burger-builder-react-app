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
  cancelHandler = () =>  {
    this.props.history.goBack();
  }
  continueHandler = () => {
    this.props.history.push('/add-address-data');
  }

  render () {
    return(
      <div>
          <CheckoutSummary ingredients={this.state.ingredients} onContinue={this.continueHandler} onCancel={this.cancelHandler} />
      </div>
    )
  }
}

export default Checkout;