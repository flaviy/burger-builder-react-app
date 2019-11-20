import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      number : '',
      postalCode: ''
    },
    loading : false
  }
  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        'name': this.state.name,
        'address' : this.state.address,
        'email': this.state.email,
      },

    }
    this.setState({ 'loading': true })
    axios.post('/orders.json', order).then(response => {
        console.log(response)
        this.setState({ 'loading': false});
        this.props.history.push('/');
      }).catch((error) => {
        this.setState({ 'loading': false})
        console.log(error)
      })

    console.log('Contact Data ingredients');
  }

  render () {
    let form = (
      <form>
        <Input elementType="input"  name="name" placeholder="Your name"  />
        <Input elementType="input"  name="email" placeholder="Your email"  />
        <Input elementType="input"  name="street" placeholder="Street"  />
        <Input elementType="input"  name="number" placeholder="Number"  />
        <Input elementType="input"  name="postalCode" placeholder="Postal Code"  />
        <Button className={classes.Input} clicked={this.orderHandler} buttype="Success">ORDER</Button>
      </form>
    );
    if(this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Data</h4>
        {form}
      </div>
    )
  }
}
export default ContactData;