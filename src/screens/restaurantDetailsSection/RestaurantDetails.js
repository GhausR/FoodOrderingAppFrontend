import React from "react";
import "./RestaurantDetails.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "font-awesome/css/font-awesome.css";
import StarIcon from "@material-ui/icons/Star";
import Grid from "@material-ui/core/Grid";

// Abhijeet
const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: "#eceff1",
    display: "flex",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  thumbNail: {
    height: "30vh",
    width: "40vh",
    padding: "10px",
  },
  description: {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    minWidth: "50vw",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  ratingAndPriceDiv: {
    display: "flex",
    justifyContent: "space-between",
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
  },
  ratingAndPrice: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));

function RestaurantDetails(props) {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <img
        src={props.restaurant.photo_URL}
        alt={props.restaurant.restaurant_name}
        className={classes.thumbNail}
      />
      <div className={classes.description}>
        <Typography variant="h5">{props.restaurant.restaurant_name}</Typography>
        <Typography variant="h6">{props.restaurant.address.city}</Typography>
        <Typography variant="p">{props.categoryList}</Typography>
        <div className={classes.ratingAndPriceDiv}>
          <div className={classes.ratingAndPrice}>
            <Typography variant="p">
              <i class="fa fa-star" aria-hidden="true" />{" "}
              {props.restaurant.customer_rating}
            </Typography>
            <Typography variant="p">
              AVERAGE RATING BY <br /> {props.restaurant.number_customers_rated}{" "}
              CUSTOMERS
            </Typography>
          </div>
          <div className={classes.ratingAndPrice}>
            <Typography variant="p">
              <i class="fa fa-inr" aria-hidden="true" />{" "}
              {props.restaurant.average_price}
            </Typography>
            <Typography variant="p">
              AVERAGE COST FOR <br /> TWO PEOPLE
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
