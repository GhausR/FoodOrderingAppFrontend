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
            firstName: '',
            lastName: '',
            email: '',
            psw: '',
            contact: '',
            loginContact: '',
            loginPsw: '',
            firstNameRequiredformHelperTextClassname: 'dispNone',
            emailformRequiredHelperTextClassname: 'dispNone',
            pswformRequiredHelperTextClassname: 'dispNone',
            contactformRequiredHelperTextClassname: 'dispNone',
            emailformInvalidHelperTextClassname: 'dispNone',
            pswformInvalidHelperTextClassname: 'dispNone',
            contactformInvalidHelperTextClassname: 'dispNone',
            contactformAlreadyExistsHelperTextClassname: 'dispNone',
            requiredContactformHelperTextClassname: 'dispNone',
            invalidContactformHelperTextClassname: 'dispNone',
            requiredPswformHelperTextClassname: 'dispNone',
            invalidPswformHelperTextClassname: 'dispNone',
            invalidCredentialformHelperTextClassname: 'dispNone',
            restaurantListToDisplay: [
                {
                    "id": "123",
      "restaurant_name": "",
      "photo_URL": "",
      "customer_rating": 100,
      "average_price": 1100,
      "number_customers_rated": 28,
      "address": {
        "id": "",
        "flat_building_name": "",
        "locality": "",
        "city": "",
        "pincode": "",
        "state": {
          "id": "",
          "state_name": ""
        }
      },
      "categories": ""
                },
                {
                    "id": "456",
      "restaurant_name": "",
      "photo_URL": "",
      "customer_rating": 100,
      "average_price": 1100,
      "number_customers_rated": 28,
      "address": {
        "id": "",
        "flat_building_name": "",
        "locality": "",
        "city": "",
        "pincode": "",
        "state": {
          "id": "",
          "state_name": ""
        }
      },
      "categories": ""
                }
            ],
            allRestaurantList: [
                {
                    "id": "123",
      "restaurant_name": "",
      "photo_URL": "",
      "customer_rating": 100,
      "average_price": 1100,
      "number_customers_rated": 28,
      "address": {
        "id": "",
        "flat_building_name": "",
        "locality": "",
        "city": "",
        "pincode": "",
        "state": {
          "id": "",
          "state_name": ""
        }
      },
      "categories": ""
                },
                {
                    "id": "456",
      "restaurant_name": "",
      "photo_URL": "",
      "customer_rating": 100,
      "average_price": 1100,
      "number_customers_rated": 28,
      "address": {
        "id": "",
        "flat_building_name": "",
        "locality": "",
        "city": "",
        "pincode": "",
        "state": {
          "id": "",
          "state_name": ""
        }
      },
      "categories": ""
                }
            ]
        };
    }


    //API call before mounting the component on screen

    componentWillMount() {
        console.log("component will mount called");
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            console.log("state changed : "+this.readyState);
            if (this.readyState === 4) {
                    that.setState({
                        restaurantListToDisplay: JSON.parse(this.responseText).restaurants,
                        allRestaurantList: JSON.parse(this.responseText).restaurants
                    });
            }
        });

        xhr.open("GET", "http://localhost:8080/api/restaurant");
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
        /*
        {
  "Accept": "application/json;charset=UTF-8"
}
        */
        xhr.send(data);
    }


    // to filter the restaurant based on the name
    filterRestaurant(searchData) {
        var tempArray = [];
        this.state.allRestaurantList.forEach(element => {
            if(element.restaurant_name.toLowerCase().includes(searchData.toLowerCase())){
                tempArray.push(element);
            }
        });

        this.setState({restaurantListToDisplay: tempArray});
        
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
        if(this.state.loginContact === '') {
            this.setState({requiredContactformHelperTextClassname : 'dispBlock'});
            this.setState({ invalidContactformHelperTextClassname: 'dispNone' });
            this.setState({invalidPswformHelperTextClassname: 'dispNone' });
            this.setState({invalidCredentialformHelperTextClassname: 'dispNone'});
        }
        else {
            this.setState({requiredContactformHelperTextClassname : 'dispBlock'});



            var isContactValid = false;

        if (this.state.loginContact.length !== 10) {
            isContactValid =  false;
          } else {
            var notPureNumber = !(isNaN(this.state.loginContact));
            
            if (notPureNumber) {
                isContactValid = false;
            } else {
                isContactValid = true;
            }
          }

        if (isContactValid) {
            this.setState({ invalidContactformHelperTextClassname: 'dispNone' });
        }
        else {
            this.setState({ invalidContactformHelperTextClassname: 'dispBlock' });
        }



        if(this.state.loginPsw === '') {
            this.setState({requiredPswformHelperTextClassname : 'dispBlock'});
            this.setState({invalidPswformHelperTextClassname: 'dispNone' });
            this.setState({invalidCredentialformHelperTextClassname: 'dispNone'});
        }
        else {
            //requiredPswformHelperTextClassname
            this.setState({requiredPswformHelperTextClassname: 'dispBlock'});

        }

        }
    }

    signupBtnClickHandler = () => {
        var shouldSignUpUser = true;
        if (this.state.firstName === '') {
            this.setState({ firstNameRequiredformHelperTextClassname: 'dispBlock' });
            shouldSignUpUser = false;
        } else {
            this.setState({ firstNameRequiredformHelperTextClassname: 'dispNone' });
        }
        if (this.state.email === '') {
            this.setState({ emailformRequiredHelperTextClassname: 'dispBlock' });
            this.setState({ emailformInvalidHelperTextClassname: 'dispNone' });
            shouldSignUpUser = false;
        } else {
            this.setState({ emailformRequiredHelperTextClassname: 'dispNone' });

            var isEmailValid = false;
            var splitEmailFirstTime = this.state.email.split("@");

            try {
                if(splitEmailFirstTime[1].length>0) {
                    var splitEmailAgain = splitEmailFirstTime[1].split(".");
                    if (splitEmailAgain[1].length>0) {
                        isEmailValid = true;
                      } else {
                        isEmailValid = false;
                      }
                }
                else {
                    isEmailValid = false;
                }
            } catch (error) {
                isEmailValid = false;
            }

            if(isEmailValid) {
                this.setState({ emailformInvalidHelperTextClassname: 'dispNone' });
            }
            else {
                shouldSignUpUser = false;
                this.setState({ emailformInvalidHelperTextClassname: 'dispBlock' });
            }

        }
        if (this.state.psw === '') {
            this.setState({ pswformRequiredHelperTextClassname: 'dispBlock' });
            this.setState({ pswformInvalidHelperTextClassname: 'dispNone' });
            shouldSignUpUser = false;
        } else {
            
        this.setState({ pswformRequiredHelperTextClassname: 'dispNone' });


        var ispswValid = false;



        if (this.state.psw.length < 8) {
            ispswValid = false;
        }
        else {
            // Regex to check valid password.
          //var regex = /^(?=.*[0-9])(?=.*[A-Z])?=.*[a-z])(?=.*[#@$%&*!^]).{8,}$/;
          var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#@$%&*!^]).{8,20}$/;
      
          ispswValid =  this.state.psw.match(regex);
        }

        if (ispswValid) {
            this.setState({ pswformInvalidHelperTextClassname: 'dispNone' });

        }
        else {
            shouldSignUpUser = false;
            this.setState({ pswformInvalidHelperTextClassname: 'dispBlock' });

        }

        }
        if (this.state.contact === '') {
            this.setState({ contactformRequiredHelperTextClassname: 'dispBlock' });
            this.setState({ contactformInvalidHelperTextClassname: 'dispNone' });
            shouldSignUpUser = false;
        } else {
            this.setState({ contactformRequiredHelperTextClassname: 'dispNone' });

            var isContactValid = false;

        if (this.state.contact.length !== 10) {
            isContactValid =  false;
          } else {
            var notPureNumber = (isNaN(this.state.contact));
            
            if (notPureNumber) {
                isContactValid = false;
            } else {
                isContactValid = true;
            }
          }

        if (isContactValid) {
            this.setState({ contactformInvalidHelperTextClassname: 'dispNone' });
        }
        else {
            shouldSignUpUser = false;
            this.setState({ contactformInvalidHelperTextClassname: 'dispBlock' });
        }
    }

    if (shouldSignUpUser) {
        this.signUpUser();
    }
    else {

    }
    }


    signUpUser = () => {
        let that = this;
        let dataSignUp = JSON.stringify({
            "contact_number": this.state.contact,
            "email_address": this.state.email,
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "password": this.state.psw
          });

        let xhrSignup = new XMLHttpRequest();
        xhrSignup.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log("signup call state : " + this.readyState);
                that.setState({ isModalOpen: true, value: 0});
            }
                
        });

        xhrSignup.open("POST", "http://localhost:8080/api/customer/signup");
        xhrSignup.setRequestHeader("Accept", "application/json;charset=UTF-8");
        xhrSignup.setRequestHeader("Cache-Control", "no-cache");
        xhrSignup.send(dataSignUp);
    }

    contactInputFieldChangeHandler = (e) => {
        this.setState({ loginContact: e.target.value });
    }
    passwordInputFieldChangeHandler = (e) => {
        this.setState({ loginPsw: e.target.value });
    }


    signupInputFieldChangeHandler = (e) => {
        console.log(e.target.id);
        if (e.target.id === 'lastName') {
            this.setState({ lastName: e.target.value });
        }
        if (e.target.id === 'firstName') {
            this.setState({ firstName: e.target.value });
        }
        if (e.target.id === 'email') {
            this.setState({ email: e.target.value });
        }
        if (e.target.id === 'psw') {
            this.setState({ psw: e.target.value });
        }
        if (e.target.id === 'contact') {
            this.setState({ contact: e.target.value });
        }
        console.log(e.target.value);
    }


    render() {

        const customStyles = {
            content: {
                width: 500,
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            }
        };

        return <div>
            <Header isLogin={false} modalHandler={this}/>
            <Grid container spacing={0}>
                {this.state.restaurantListToDisplay.map(restrauntData => (
                <Grid key={'grid'+restrauntData.id} item xs={6} sm={6} md={3}>
                    <RestaurantCard restraunt={restrauntData}/>
            </Grid>
        ))}

            </Grid>
            <Modal id="login-register-modal" ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="LOGIN" />
                    <Tab label="SIGNUP" />
                </Tabs>
                <TabContainer>
                    {this.state.value === 0 && <div>
                        <div className="form-control-container">
                            <FormControl className="form-control-login" required>
                                <InputLabel htmlFor="contact">Contact No.</InputLabel>
                                <Input id="contact" type="text" onChange={this.contactInputFieldChangeHandler} />
                                <FormHelperText className={this.state.requiredContactformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                                <FormHelperText className={this.state.invalidContactformHelperTextClassname} style={{ color: '#f05945' }}>Invalid Contact</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-login" required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.passwordInputFieldChangeHandler} />
                                <FormHelperText className={this.state.requiredPswformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                                <FormHelperText className={this.state.invalidPswformHelperTextClassname} style={{ color: '#f05945' }}>This contact number has not been registered!</FormHelperText>
                                <FormHelperText className={this.state.invalidCredentialformHelperTextClassname} style={{ color: '#f05945' }}>Invalid Credentials</FormHelperText>
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
                                <Input id="firstName" type="text" onChange={this.signupInputFieldChangeHandler} />
                                <FormHelperText className={this.state.firstNameRequiredformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration">
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id="lastName" type="text" onChange={this.signupInputFieldChangeHandler} />
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" onChange={this.signupInputFieldChangeHandler} />
                                <FormHelperText className={this.state.emailformRequiredHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                                <FormHelperText className={this.state.emailformInvalidHelperTextClassname} style={{ color: '#f05945' }}>Invalid Email</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="psw">Password</InputLabel>
                                <Input id="psw" type="password" onChange={this.signupInputFieldChangeHandler} />
                                <FormHelperText className={this.state.pswformRequiredHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                                <FormHelperText className={this.state.pswformInvalidHelperTextClassname} style={{ color: '#f05945' }}>Password must contain at least one capital letter, one small letter, one number, and one special character</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="contact">Contact No.</InputLabel>
                                <Input id="contact" type="text" onChange={this.signupInputFieldChangeHandler} />
                                <FormHelperText className={this.state.contactformRequiredHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                                <FormHelperText className={this.state.contactformInvalidHelperTextClassname} style={{ color: '#f05945' }}>Contact No. must contain only numbers and must be 10 digits long</FormHelperText>
                                <FormHelperText className={this.state.contactformAlreadyExistsHelperTextClassname} style={{ color: '#f05945' }}>This contact number is already registered! Try other contact number.</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <Button variant="contained" color="primary" onClick={this.signupBtnClickHandler}>SIGNUP</Button>
                        </div>
                    </div>}
                </TabContainer>
            </Modal>
        </div>
    }
}

export default Home;