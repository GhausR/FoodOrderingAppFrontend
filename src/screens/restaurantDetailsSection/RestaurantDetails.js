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
                    <img className="restaurant-info-image" src="https://media-cdn.tripadvisor.com/media/photo-s/19/8b/4e/ab/new-place.jpg" alt="restaurant-image" />
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
                            Restaurant Name
                </p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                </Grid>

            </div>
            <div>

                <Grid container>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                    <Grid item xs={4} sm={4} md={12}>
                        <p> Restaurant city</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                </Grid>


            </div>
            <div>
                <Grid container>
                    <Grid item xs={4} sm={4} md={0}></Grid>
                    <Grid item xs={4} sm={4} md={12}>
                        <p>Restaurant Categories, Restaurant Categories, Restaurant Categories, Restaurant Categories</p>
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
                                    <p>AVERAGE RATING BY</p>
                                    <p>658 CUSTOMERS</p>
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
                                    <p>₹ 600</p>
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