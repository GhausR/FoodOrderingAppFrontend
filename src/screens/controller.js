import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import Checkout from './checkout/Checkout';
import Profile from './profile/Profile';

// to handle navigation/ routing
class Controller extends Component {
    render() {
      return (
        <Router>
          <div>
          <Route exact path='/' render={(props) => <Home {...props} />} />
            <Route path='/restaurant/:restaurant_id' render={(props) => <Details {...props} />} />
            <Route path='/checkout' render={(props) => <Checkout {...props} />} />
            <Route path='/profile' render={(props) => <Profile {...props} />} />
          </div>
        </Router>
      )
    }
  }
  
  export default Controller;