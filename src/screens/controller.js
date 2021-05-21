import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import Checkout from './checkout/Checkout';

// to handle navigation/ routing
class Controller extends Component {
    render() {
      return (
        <Router>
          <div>
            <Route path='/home' render={(props) => <Home {...props} />} />
            <Route path='/restaurant/:restaurant_id' render={(props) => <Details {...props} />} />
            <Route path='/checkout' render={(props) => <Checkout {...props} />} />
          </div>
        </Router>
      )
    }
  }
  
  export default Controller;