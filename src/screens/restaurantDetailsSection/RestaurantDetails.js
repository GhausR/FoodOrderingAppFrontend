import React from 'react';
import './RestaurantDetails.css';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';
function RestaurantDetails(props) {
return <div className="restaurant-info-section">
<Grid container>
    <Grid item xs={12} sm={12} md={3}>

        <div className="restaurant-info-image-div">


            <Grid container>
                <Grid item xs={4} sm={4} md={0}></Grid>
                <Grid item xs={4} sm={4} md={12}>
                    <img className="restaurant-info-image" src={props.restaurant.photo_URL} alt={props.restaurant.restaurant_name} />
                </Grid>
                <Grid item xs={4} sm={4} md={0}></Grid>
            </Grid>
        </div>
    </Grid>
    <Grid item xs={12} sm={12} md={9}>
        <div>
            <div>
                <Grid container>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                    <Grid item xs={4} sm={4} md={12}>
                        <p>
                            {props.restaurant.restaurant_name}
                </p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                </Grid>

            </div>
            <div>

                <Grid container>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                    <Grid item xs={4} sm={4} md={12}>
                        <p>{props.restaurant.address.city}</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                </Grid>


            </div>
            <div>
                <Grid container>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                    <Grid item xs={4} sm={4} md={12}>
                        <p>{props.categoryList}</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                </Grid>

            </div>
            <div className="restaurant-info-customer-rating-cost-div">



                <Grid container>
                    <Grid item xs={6} sm={6} md={3}>
                        <div>
                            <Grid container>
                                <Grid item xs={3} sm={3} md={0}>
                                </Grid>
                                <Grid item xs={3} sm={3} md={12}>
                                    <StarIcon />
                                    <p>{props.restaurant.customer_rating}</p>
                                    <p>AVERAGE RATING BY</p>
                                    <p>{props.restaurant.number_customers_rated+" CUSTOMERS"}</p>
                                </Grid>
                                <Grid item xs={3} sm={3} md={0}>

                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={0} sm={0} md={3}>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <div>
                            <Grid container>
                                <Grid item xs={3} sm={3} md={0}>

                                </Grid>
                                <Grid item xs={3} sm={3} md={12}>
                                    <p>{"₹ "+props.restaurant.average_price}</p>
                                    <p>AVERAGE COST FOR</p>
                                    <p>TWO PEOPLE</p>
                                </Grid>
                                <Grid item xs={3} sm={3} md={0}>

                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={0} sm={0} md={3}>
                    </Grid>
                </Grid>




            </div>
        </div>

    </Grid>
</Grid>
</div>;
}

export default RestaurantDetails;