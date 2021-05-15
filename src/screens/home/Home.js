import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import RestaurantCard from '../restaurants/restaurants';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
    return (<Typography component="div" style={{ padding: 0 }}>
        {props.children}
    </Typography>);
}


class Home extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0,
        };
    }

    openModalHandler = () => {
        this.setState({ isModalOpen: true, value: 0});
    }

    closeModalHandler = () => {
        this.setState({ isModalOpen: false, value: 0});
    }
    tabChangeHandler = (event, value) => {
        this.setState({ isModalOpen: true, value: value});
    }
    loginBtnClickHandler = () => {
    }

    registrationBtnClickHandler = () => {
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);
        console.log(this.state.psw);
        console.log(this.state.contact);
    }

    userNameInputFieldChangeHandler = (e) => {
    }
    passwordInputFieldChangeHandler = (e) => {
    
    }

    render() {

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            }
        };

        return <div>
            <Header modalHandler={this}/>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard />
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard />
                </Grid>
            </Grid>
            <Modal id="login-register-modal" ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <TabContainer>
                    {this.state.value === 0 && <div>
                        <div className="form-control-container">
                            <FormControl className="form-control-login" required>
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <Input id="userName" type="text" onChange={this.userNameInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-login" required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.passwordInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <Button variant="contained" color="primary" onClick={this.loginBtnClickHandler}>LOGIN</Button>
                        </div>
                    </div>}

                    {this.state.value === 1 && <div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input id="firstName" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id="lastName" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="psw">Password</InputLabel>
                                <Input id="psw" type="password" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="contact">Contact</InputLabel>
                                <Input id="contact" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <Button variant="contained" color="primary" onClick={this.registrationBtnClickHandler}>REGISTER</Button>
                        </div>
                    </div>}
                </TabContainer>
            </Modal>
        </div>
    }
}

export default Home;