import React, {Component} from 'react';
import classes from './Checkout.css';
import CheckoutSummary from './../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {
  state = {
    ingredients : {

    }
  }
  cancelHandler = () =>  {
    this.props.history.goBack();
  }
  continueHandler = () => {
    this.props.history.push(this.props.match.url + '/contact-data');
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
          <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
      </div>
    )
  }
}

export default Checkout;