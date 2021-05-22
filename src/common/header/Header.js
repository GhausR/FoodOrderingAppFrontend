import React, { Component } from 'react';
import './Header.css';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';


class Header extends Component {

    constructor() {
        super();
        // variable to check, if the options menu
        // is open or not
        this.state = {
            "options-open": false,
        }
    }

    loginHandler = () => {
        this.props.modalHandler.openModalHandler();
    }

    picClickHandler = () => {
        if (this.state['options-open']) {
            this.setState({ 'options-open': false });
        }
        else {
            this.setState({ 'options-open': true });
        }
    }

    filterRestaurantHandler = (e) => {
        this.props.modalHandler.filterRestaurant(e.target.value);
    }

    render() {

        return <div className="header-outer-div">
            <div className="header-grid-div">
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="logo-icon-div"><FastfoodIcon /></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <div><div className="header-search_field-container">
                            <SearchIcon />
                            <TextField style={{width:210}}
                                placeholder="Search by Restaurant name" onChange={this.filterRestaurantHandler}/>
                        </div></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1}>
                    {!(this.props.isLogin) && <div className="header-login-btn-div">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<AccountCircleIcon />}
                                onClick={this.loginHandler}
                                style={{width:90, left:5}}
                            >
                                Login
      </Button>
                        </div>}
                        {(this.props.isLogin) && <div onClick={this.picClickHandler} className="header-login-btn-div">
                            <div className="logged-in-user-first-name-div">
                            <AccountCircleIcon/>
                            <p className="loggedInUserName-para">{this.props.firstName}</p>
                            </div>
                            
                        </div>}
                    </Grid>
                </Grid>
            </div>
            {this.state['options-open'] && <div>
                    <div className="account-options-container">
                    <div>
                            <p onClick={this.profilePageNavigationHandler} >My Profile</p>
                        </div>
                        <p onClick={this.logoutClickHandler}>Logout</p>
                    </div>
                </div>
                }
        </div>
    }
}

export default Header;