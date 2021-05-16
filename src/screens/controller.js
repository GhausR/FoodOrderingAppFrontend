import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';

// to handle navigation/ routing
class Controller extends Component {
    render() {
      return (
        <Router>
          <div>
            <Route path='/home' render={(props) => <Home {...props} />} />
            <Route path='/restaurant/:restaurant_id' render={(props) => <Details {...props} />} />
          </div>
        </Router>
      )
    }
  }
  
  export default Controller;