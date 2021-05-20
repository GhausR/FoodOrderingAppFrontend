import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';

import RestaurantDetails from '../restaurantDetailsSection/RestaurantDetails';
import { Grid } from '@material-ui/core';
import Categories from '../categories/Categories';
import Items from '../items/Items';
import MyCartCard from '../myCart/myCart';

class Details extends Component {
    render() {
        return <div>
            <Header isLogin={false} />
            <RestaurantDetails/>
            <div className="restaurant-menu-items-mycart-div">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Categories categoryName="Chinese"/>
                        <Items itemName="ChickenWrap" itemPrice={250} isVeg={false}/>
                        <Items itemName="ChickenWrap" itemPrice={250} isVeg={false}/>
                        <Items itemName="ChickenWrap" itemPrice={250} isVeg={false}/>
                        <Categories categoryName="Continental"/>
                        <Items itemName="Chicken Peri Peri" itemPrice={250} isVeg={true}/>
                        <Items itemName="Chicken Peri Peri" itemPrice={250} isVeg={true}/>
                        <Items itemName="Chicken Peri Peri" itemPrice={250} isVeg={true}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <MyCartCard/>
                    </Grid>
                </Grid>
            </div>
        </div>
    }
}

export default Details;
