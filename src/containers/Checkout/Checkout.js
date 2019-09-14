import React, {Component} from 'react';
import classes from './Checkout.css';
import CheckoutSummary from './../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients : {

    }
  }
  cancelHandler = () =>  {
    this.props.history.goBack();
  }
  continueHandler = () => {
    this.props.history.push('/add-address-data');
  }

  componentDidMount () {
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      for (let param of query.entries()) {
        ingredients[param[0]] = +param[1];
      }
      this.setState({ingredients : ingredients});
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