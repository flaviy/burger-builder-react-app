import React, { Component } from 'react';
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/orders" component={Orders} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
