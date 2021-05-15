import React, { Component } from 'react';
import './Header.css';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Header extends Component {

    loginHandler = () => {
        this.props.modalHandler.openModalHandler();
    }

    render() {

        return <div>
            <div className="header-grid-div">
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="logo-icon-div"><FastfoodIcon /></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <div><div className="header-search_field-container">
                            <SearchIcon />
                            <TextField
                                placeholder="Search by Restaurant name" />
                        </div></div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1}>
                        <div className="header-login-btn-div">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<AccountCircleIcon />}
                                onClick={this.loginHandler}
                            >
                                Login
      </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    }
}

export default Header;