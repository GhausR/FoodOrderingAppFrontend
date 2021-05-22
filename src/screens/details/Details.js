import React, { Component } from 'react';
import './Details.css';
import Header from '../../common/header/Header';

import RestaurantDetails from '../restaurantDetailsSection/RestaurantDetails';
import { Grid } from '@material-ui/core';
import Categories from '../categories/Categories';
import Items from '../items/Items';
import MyCartCard from '../myCart/myCart';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            isValidRestaurant: false,
            categoryList: '',
            restaurantDetails: {
                "id": "1dd",
                "restaurant_name": "",
                "photo_URL": "",
                "customer_rating": 4.9,
                "average_price": 1100,
                "number_customers_rated": 28,
                "address": {
                  "id": "",
                  "flat_building_name": "",
                  "locality": "",
                  "city": "",
                  "pincode": "",
                  "state": {
                    "id": "",
                    "state_name": ""
                  }
                },
                "categories": [
                  {
                    "id": "",
                    "category_name": "",
                    "item_list": [
                      {
                        "id": "",
                        "item_name": "",
                        "price": 100,
                        "item_type": ""
                      },
                    ]
                  },
                  {
                    "id": "2",
                    "category_name": "",
                    "item_list": [
                      {
                        "id": "",
                        "item_name": "",
                        "price": 250,
                        "item_type": ""
                      },
                    ]
                  },
                  {
                    "id": "",
                    "category_name": "",
                    "item_list": [
                      {
                        "id": "2",
                        "item_name": "",
                        "price": 250,
                        "item_type": ""
                      }
                    ]
                  },
                  {
                    "id": "",
                    "category_name": "",
                    "item_list": [
                      {
                        "id": "",
                        "item_name": "",
                        "price": 100,
                        "item_type": ""
                      },
                    ]
                  },
                  {
                    "id": "",
                    "category_name": "",
                    "item_list": [
                      {
                        "id": "",
                        "item_name": "",
                        "price": 180,
                        "item_type": ""
                      },
                    ]
                  }
                ]
              }
        }
    }

    componentWillMount() {

        console.log("component will mount called");
        console.log(this.props.match.params.restaurant_id);
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var categories = JSON.parse(this.responseText).categories;
                var categoryString = '';
                categories.forEach(category => {
                    categoryString = category.category_name + ", " + categoryString;
                });

                    that.setState({
                        restaurantDetails: JSON.parse(this.responseText),
                        categoryList: categoryString,
                        isValidRestaurant: true
                    });
            }
        });

        xhr.open("GET", "http://localhost:8080/api/restaurant/"+this.props.match.params.restaurant_id);
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
        /*
        {
  "Accept": "application/json;charset=UTF-8"
}
        */
        xhr.send(data);
    }

    render() {
        return <div>
            <Header isLogin={false} />
            {this.state.restaurantDetails !== undefined &&
            <RestaurantDetails restaurant={this.state.restaurantDetails} categoryList={this.state.categoryList}/>
            }
            
            <div className="restaurant-menu-items-mycart-div">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>




                    {this.state.restaurantDetails.categories.map(category => (
                        
                        <div>
                            <Categories categoryName={category.category_name}/>
                            {category.item_list.map(item => (
                                <Items itemName={item.item_name} itemPrice={item.price} isVeg={item.item_type === "VEG"?true:false}/>
                            ))}
                        </div>
        ))};
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
