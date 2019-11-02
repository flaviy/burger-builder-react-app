import React, {Component} from 'react';
import CheckoutSummary from './../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {
  state = {
    ingredients : {

    },
    totalPrice : 0
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
      let price = 0;
      for (let param of query.entries()) {
        if(param[0] !== 'price') {
          ingredients[param[0]] = +param[1];
        } else {
          price = param[1];
        }
      }
      this.setState({ingredients : ingredients, totalPrice : price});
  }

  render () {
    return(
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}
                         onContinue={this.continueHandler}
                         onCancel={this.cancelHandler}/>
        <Route path={this.props.match.url + '/contact-data'}
               render={() => (
                 <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...this.props}/>)}/>
      </div>
    )
  }
}

export default Checkout;