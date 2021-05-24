import React, { Component } from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";


// to style search text field
const styles = (theme) => ({
  root: {
    "& .MuiInput-underline:before": {
      borderBottomColor: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  },
});

class Header extends Component {


  constructor() {
    super();
    // variable to check, if the options menu
    // is open or not
    this.state = {
      "options-open": false,
    };
  }


  // login button click handling
  loginHandler = () => {
    if (this.props.modalHandler !== undefined && this.props.modalHandler !== null) {
      this.props.modalHandler.openModalHandler();
    }

  };

  // profile pic click handling
  picClickHandler = () => {
    if (this.props.modalHandler !== undefined && this.props.modalHandler !== null) {
      if (this.state["options-open"]) {
        this.setState({ "options-open": false });
      } else {
        this.setState({ "options-open": true });
      }
    }
  };

  // filter restaurants based on entered text by user
  filterRestaurantHandler = (e) => {
    if (this.props.modalHandler !== undefined && this.props.modalHandler !== null) {
      this.props.modalHandler.filterRestaurant(e.target.value);
    }
  };


  // logout button click handling
  logoutClickHandler = () => {
    if (this.props.modalHandler !== undefined && this.props.modalHandler !== null) {
      this.props.modalHandler.logout();
      this.setState({ "options-open": false });
    }
  };

  // navigate to profile page
  profilePageNavigationHandler = () => {
    if (this.props.modalHandler !== undefined && this.props.modalHandler !== null) {
      this.props.modalHandler.goToProfile();
    }
  };
  /*console.log(sessionStorage.getItem('access-token'));
    sessionStorage.removeItem('uuid');
    sessionStorage.removeItem('access-token');
    this.setState({ loggedIn: false })

    this.props.history.push('/');
    */

  render() {
    const { classes } = this.props;
    return (
      <div className="header-outer-div">
        <div className="header-grid-div">
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <div className="logo-icon-div">
                <FastfoodIcon fontSize="large" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              {this.props.isOnHome && (
                <div>
                  <div className="header-search_field-container">
                    {/* <SearchIcon /> */}
                    <TextField
                      style={{ width: 300 }}
                      placeholder="Search by Restaurant name"
                      onChange={this.filterRestaurantHandler}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon htmlColor="white" />
                          </InputAdornment>
                        ),
                      }}
                      classes={{
                        root: classes.root,
                      }}
                    />
                  </div>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={12} md={1}>
              {!this.props.isLogin && (
                <div className="header-login-btn-div">
                  <Button
                    variant="contained"
                    color="default"
                    startIcon={<AccountCircleIcon />}
                    onClick={this.loginHandler}
                    style={{ width: 90, left: 5 }}
                  >
                    Login
                  </Button>
                </div>
              )}
              {this.props.isLogin && (
                <div
                  onClick={this.picClickHandler}
                  className="header-login-btn-div"
                >
                  <div className="logged-in-user-first-name-div">
                    <AccountCircleIcon />
                    <p className="loggedInUserName-para">
                      {this.props.firstName}
                    </p>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
        {this.state["options-open"] && (
          <div>
            <div className="account-options-container">
              <div>
                <p onClick={this.profilePageNavigationHandler}>My Profile</p>
              </div>
              <p onClick={this.logoutClickHandler}>Logout</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// export default Header;
export default withStyles(styles, { withTheme: true })(Header);
