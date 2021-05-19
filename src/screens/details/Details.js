import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';

import RestaurantDetails from '../restaurantDetailsSection/RestaurantDetails';
class Details extends Component {
    render() {
        return <div>
            <Header isLogin={false} />
            <RestaurantDetails/>
        </div>
    }
}

export default Details;
