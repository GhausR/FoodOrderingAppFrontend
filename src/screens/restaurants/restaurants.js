import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from 'react';
import './restaurants.css';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

class RestaurantsCards extends Component {
    render() {
        return <div className="restaurant-card-div">
            <Card>
                <CardContent>
                    <div>
                        <img className="restaurant-card-img-div" src={this.props.restraunt.photo_URL} alt={this.props.restraunt.restaurant_name} />
                    </div>
                    <div>
                        <p className="restaurant-name-heading">{this.props.restraunt.restaurant_name}</p>
                        <p>{this.props.restraunt.categories}</p>
                        <div className="btn-stars-price-for-two-div">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<StarIcon />}
                                style={{ backgroundColor: "yellow", height: 30, width: 100 }}
                            >
                                {this.props.restraunt.customer_rating + "(" + this.props.restraunt.number_customers_rated + ")"}
                            </Button>
                            <p className="price-for-two-text">{"₹" + this.props.restraunt.average_price + "  for two"}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    }
}

export default RestaurantsCards;