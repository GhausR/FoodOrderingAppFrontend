import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import React , {Component} from 'react';
import './restaurants.css';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

class RestaurantsCards extends Component {
render() {
    return <div className="restaurant-card-div">
    <Card>
        <CardContent>
            <div>
            <img className="restaurant-card-img-div" src="https://media-cdn.tripadvisor.com/media/photo-s/19/8b/4e/ab/new-place.jpg" alt="some restaurant pic"/>
            </div>
            <div>
            <p className="restaurant-name-heading">Lion Heart</p>
            <p>Categories 1, Categories 2, category 3,Categories 1, Categories 2, category 3</p>
            <div className="btn-stars-price-for-two-div">
            <Button
                                variant="contained"
                                color="default"
                                startIcon={<StarIcon />}
                                style={{backgroundColor:"yellow"}}
                            >
                                4.5(562)
      </Button>
      <p className="price-for-two-text">rs 2000 for two</p>
            </div>
            </div>
          </CardContent>
    </Card>
    </div>
}
}

export default RestaurantsCards;