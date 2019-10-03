import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      number : '',
      postalCode: ''
    }
  }
  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Data</h4>
        <form>
          <input className={classes.Input} type="text"  name="name" placeholder="Your name" />
          <input className={classes.Input} type="text"  name="email" placeholder="Your email" />
          <input className={classes.Input} type="text"  name="street" placeholder="Street" />
          <input className={classes.Input} type="text"  name="number" placeholder="Number" />
          <input className={classes.Input} type="text"  name="postalCode" placeholder="Postal Code" />
          <Button className={classes.Input} buttype="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}
export default ContactData;