import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';

// to handle navigation/ routing
class Controller extends Component {
    render() {
      return (
        <Router>
          <div>
            <Route path='/home' render={(props) => <Home {...props} />} />
          </div>
        </Router>
      )
    }
  }
  
  export default Controller;