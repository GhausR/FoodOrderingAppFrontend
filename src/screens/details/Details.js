import React, {Component} from 'react';
import './Details.css';
import Grid from '@material-ui/core/Grid';

class Details extends Component {
    render() {
        return <div>
            <div className="restaurant-info-section">
                <Grid container>
                    <Grid item xs={12} sm={12} md={3}>
                    <img className="restaurant-info-image" src="https://media-cdn.tripadvisor.com/media/photo-s/19/8b/4e/ab/new-place.jpg" alt="restaurant-image"/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <p>
                                    Restaurant Name
                                </p>
                                <p> Restaurant city</p>
                                <p>Restaurant Categories, Restaurant Categories, Restaurant Categories, Restaurant Categories</p>
                            </Grid>
                            <Grid item xs={0} sm={0} md={6}>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    }
}

export default Details;
