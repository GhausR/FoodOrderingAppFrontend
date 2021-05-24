import React, { Component } from 'react';
import Header from '../../common/header/Header';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import AddressCard from '../addressCard/AddressCard';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import '../checkout/Checkout.css';
import Grid from "@material-ui/core/Grid";
import MyCartCard from '../myCart/myCart';

// tab container for existing address and new address
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}

// Checkout screen component
class Checkout extends Component {

  // maintain state of the component
  constructor() {
    super();
    this.state = {
      successOrderID: '',
      placeOrderSuccessMessageClass: '',
      placeOrderFailedMessageClass: '',
      loggedIn: false,
      loggedInUserFirstName: '',
      tabSelected: 0,
      activeStep: 0,
      selectedState: '',
      selectedFlat: '',
      selectedCity: '',
      selectedLocality: '',
      selectedPincode: '',
      selectedAddressId: '',
      selectedPaymentMethod: '',
      FlatformHelperTextClassname: 'DispNone',
      localityformHelperTextClassname: 'DispNone',
      cityformHelperTextClassname: 'DispNone',
      stateformHelperTextClassname: 'DispNone',
      pincodeformHelperTextClassname: 'DispNone',
      pincodeValidityformHelperTextClassname: 'DispNone',
      itemQuantities: [],
      totalBill: 0,
      restaurantName: '',
      isFinished: false,
      allStatesList: [
        {
          "id": "123",
          "state_name": ""
        },
        {
          "id": "456",
          "state_name": ""
        },
      ],
      allPaymentsList: [
        {
          "id": "111",
          "payment_name": ""
        },
        {
          "id": "222",
          "payment_name": ""
        },
      ],
      allAddressesList: [
        {
          "city": "",
          "flat_building_name": "",
          "id": "",
          "locality": "",
          "pincode": "",
          "state": {
            "id": "",
            "state_name": ""
          }
        },
        {
          "city": "",
          "flat_building_name": "",
          "id": "",
          "locality": "",
          "pincode": "",
          "state": {
            "id": "",
            "state_name": ""
          }
        }
      ],
    }
  }


  componentWillMount() {
    var accessToken = sessionStorage.getItem("access-token");
    if (accessToken === undefined || accessToken === null) {
      this.setState({ loggedIn: false });
      this.props.history.push("/"); // if user isn't loggedin
      // go back to home page
    }
    else {
      var firstName = sessionStorage.getItem("firstname");
      this.setState({ loggedIn: true, loggedInUserFirstName: firstName });
      this.getAllAddresses(); // get all addresses
      this.getAllStates(); // get all states
      this.getAllPayments(); // get all payment methods
      var totalBill = 0;
      if (this.props.location.state === undefined || this.props.location.state === null) {
        this.props.history.push("/");
      }
      else {
        this.props.location.state.itemQuantities.forEach(element => {
          if (element.itemQuantityObject.itemQuantity !== 0) {
            totalBill = totalBill + (element.itemQuantityObject.itemQuantity * element.itemQuantityObject.itemPrice);
          }
        });
        //restaurantName

        this.setState({ itemQuantities: this.props.location.state.itemQuantities, totalBill: totalBill, restaurantName: this.props.location.state.restaurantName, restaurantId: this.props.location.state.restaurantId });
      }

    }
  }

  // when user changes address tab, this method handles it
  tabChangeHandler = (event, value) => {
    this.setState({ tabSelected: value });
    if (value === 0) {
      this.getAllAddresses();
    }
  };

  // handles change of state in menu
  handleStateMenuChange = (event) => {
    this.setState({ selectedState: event.target.value });
  };

  // flat text field change handler
  flatChangeHandler = (flat) => {
    this.setState({ selectedFlat: flat.target.value });
  }

  // locality text field change handler
  localityChangeHandler = (locality) => {
    this.setState({ selectedLocality: locality.target.value });
  }

  // city text field change handler
  cityChangeHandler = (city) => {
    this.setState({ selectedCity: city.target.value });
  }

  // pincode text field change handler
  pincodeChangeHandler = (pincode) => {
    console.log(pincode.target.value);
    this.setState({ selectedPincode: pincode.target.value });
  }


  // save address button click handler
  saveAddressHandler = () => {
    console.log("save address handler");
    var isAddressCorrect = true;
    if (this.state.selectedFlat === '') {
      this.setState({ FlatformHelperTextClassname: 'DispBlock' });
      isAddressCorrect = false;

    }
    else {
      this.setState({ FlatformHelperTextClassname: 'DispNone' });
    }
    if (this.state.selectedCity === '') {
      this.setState({ cityformHelperTextClassname: 'DispBlock' });
      isAddressCorrect = false;
    }
    else {
      this.setState({ cityformHelperTextClassname: 'DispNone' });
    }
    if (this.state.selectedLocality === '') {
      this.setState({ localityformHelperTextClassname: 'DispBlock' });
      isAddressCorrect = false;
    }
    else {
      this.setState({ localityformHelperTextClassname: 'DispNone' });
    }
    if (this.state.selectedState === '') {
      this.setState({ stateformHelperTextClassname: 'DispBlock' });
      isAddressCorrect = false;
    }
    else {
      this.setState({ stateformHelperTextClassname: 'DispNone' });
    }
    if (this.state.selectedPincode === '') {
      this.setState({ pincodeformHelperTextClassname: 'DispBlock' });
      isAddressCorrect = false;
    }
    else {
      this.setState({ pincodeformHelperTextClassname: 'DispNone' });



      var isPincodeValid = false;

      if (this.state.selectedPincode.length !== 6) {
        console.log("pincode length not 6")
        isPincodeValid = false;
      } else {
        console.log("pincode length is 6")
        var notPureNumber = isNaN(this.state.selectedPincode);

        if (notPureNumber) {
          console.log("pincode not pure number")
          isPincodeValid = false;
        } else {
          console.log("pincode pure number")
          isPincodeValid = true;
        }
      }


      if (isPincodeValid) {
        this.setState({ pincodeValidityformHelperTextClassname: "DispNone" });
        console.log("pincode valid")
      } else {
        console.log("pincode invalid")
        this.setState({ pincodeValidityformHelperTextClassname: "DispBlock" });
        isAddressCorrect = false;
      }



    }

    if (isAddressCorrect) {
      console.log("address valid")
      this.saveAddressApiCall();
    }
    else {

    }

  }


  // when user selects an address card
  selectAddressHandler = (id) => {
    console.log(id);
    this.setState({ selectedAddressId: id });
  }
  // Stepper next step
  nextActiveStep = () => {
    if (this.state.selectedAddressId !== '') {


      this.setState({ activeStep: 1 });
    }
  }

  // Finish all steps of stepper
  finishCheckoutHandler = () => {
    if (this.state.selectedPaymentMethod !== '') {
      this.setState({ isFinished: true, activeStep: 2 });
    }
  }

  // go back to address selecting step
  goBackToAddressStepHandler = () => {
    this.setState({ isFinished: false, activeStep: 0 });
  }

  // selction of payment method by user
  handlePaymentOptionChange = (event) => {
    this.setState({ selectedPaymentMethod: event.target.value });
  }

  // when user wants to review address and payment
  changeCheckoutDetailsHandler = () => {
    this.setState({ isFinished: false, activeStep: 0 });
  }

  render() {
    return <div>
      <div
        className={this.state.placeOrderFailedMessageClass}
        id="snackbar"
      >
        Unable to place your order! Please try again!
        </div>
      <div
        className={this.state.placeOrderSuccessMessageClass}
        id="snackbar"
      >
        Order placed successfully! Your order ID is {this.state.successOrderID}.
        </div>
      <div>
        <Header isLogin={this.state.loggedIn}
          modalHandler={null}
          firstName={this.state.loggedInUserFirstName}
          isOnHome={false}
        />
      </div>
      <Grid container>
        <Grid item xs={12} md={8}>

          <div>
            <Stepper activeStep={this.state.activeStep} orientation="vertical">
              <Step key={'1'}>
                <StepLabel>Delivery</StepLabel>
                <StepContent>
                  <AppBar position="static">
                    <Tabs value={this.state.tabSelected} onChange={this.tabChangeHandler}>
                      <Tab label="EXISTING ADDRESS" />
                      <Tab label="NEW ADDRESS" />
                    </Tabs>
                  </AppBar>
                  <TabContainer>
                    {
                      this.state.tabSelected === 0 &&

                      <div>
                        {this.state.allAddressesList !== null &&
                          <div>
                            <Grid container>
                              {
                                this.state.allAddressesList.map(
                                  address => (
                                    <Grid item xs={6} sm={6} md={4}>
                                      <div onClick={this.selectAddressHandler.bind(this, address.id)} className={this.state.selectedAddressId === address.id ? 'selectedAddressDiv' : 'unselectedAddressDiv'}>
                                        <AddressCard City={address.city} Flat={address.flat_building_name} Locality={address.locality} State={address.state.state_name} Pincode={address.pincode} isSelected={this.state.selectedAddressId === address.id} />
                                      </div></Grid>
                                  )
                                )
                              }
                            </Grid>
                            <div>
                              <Button
                                variant="contained"
                                style={{ width: 40, fontSize: 12, marginRight: 10 }}
                                disabled
                              >
                                BACK
                  </Button>
                              <Button
                                variant="contained"
                                color="primary"
                                style={{ width: 40, fontSize: 12 }}
                                onClick={this.nextActiveStep}
                              >
                                NEXT
                  </Button>
                            </div>
                          </div>

                        }

                        {this.state.allAddressesList === null &&
                          <div>
                            <p style={{ color: 'grey' }}>
                              There are no saved addresses! You can save an address using the 'New Address' tab or using your ‘Profile’ menu option.
                                                    </p>
                          </div>

                        }

                      </div>



                    }
                    {
                      this.state.tabSelected === 1 &&

                      <div>
                        <div>
                          <FormControl required>
                            <InputLabel htmlFor="Flat">Flat/Building No.</InputLabel>
                            <Input
                              id="Flat"
                              type="text"
                              onChange={this.flatChangeHandler}
                            />
                            <FormHelperText
                              className={
                                this.state.FlatformHelperTextClassname
                              }
                              style={{ color: "#f05945" }}
                            >
                              required
                    </FormHelperText>
                          </FormControl>
                        </div>
                        <div >
                          <FormControl required>
                            <InputLabel htmlFor="locality">Locality</InputLabel>
                            <Input
                              id="locality"
                              type="text"
                              onChange={this.localityChangeHandler}
                            />
                            <FormHelperText
                              className={this.state.localityformHelperTextClassname}
                              style={{ color: "#f05945" }}
                            >
                              required
                    </FormHelperText>
                          </FormControl>
                        </div>

                        <div >
                          <FormControl required>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input
                              id="city"
                              type="text"
                              onChange={this.cityChangeHandler}
                            />
                            <FormHelperText
                              className={this.state.cityformHelperTextClassname}
                              style={{ color: "#f05945" }}
                            >
                              required
                    </FormHelperText>
                          </FormControl>
                        </div>






                        <div>


                          {<div>
                            <FormControl required>
                              <InputLabel id="state-menu">State</InputLabel>
                              <Select
                                labelId="state-menu"
                                id="state-menu"
                                value={this.state.selectedState}
                                onChange={this.handleStateMenuChange}
                                style={{ width: 130 }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {
                                  this.state.allStatesList.map(
                                    state => (
                                      <MenuItem value={state.id}>{state.state_name}</MenuItem>
                                    )
                                  )}


                              </Select>
                              <FormHelperText
                                className={this.state.stateformHelperTextClassname}
                                style={{ color: "#f05945" }}
                              >
                                required
                    </FormHelperText>
                            </FormControl>
                          </div>
                          }
                        </div>




                        <div >
                          <FormControl required>
                            <InputLabel htmlFor="pincode">Pincode</InputLabel>
                            <Input
                              id="pincode"
                              type="text"
                              onChange={this.pincodeChangeHandler}
                            />
                            <FormHelperText
                              className={this.state.pincodeformHelperTextClassname}
                              style={{ color: "#f05945" }}
                            >
                              required
                    </FormHelperText>
                            <FormHelperText
                              className={this.state.pincodeValidityformHelperTextClassname}
                              style={{ color: "#f05945" }}
                            >
                              Pincode must contain only numbers and must be 6 digits long
                    </FormHelperText>
                          </FormControl>
                        </div>



                        <div>
                          <Button
                            variant="contained"
                            color="secondary"
                            style={{ width: 130, fontSize: 10 }}
                            onClick={this.saveAddressHandler}
                          >
                            SAVE ADDRESS
                  </Button>
                        </div>
                      </div>
                    }
                  </TabContainer>

                </StepContent>
              </Step>
              <Step key={'2'}>
                <StepLabel>Payment</StepLabel>
                <StepContent>
                  <div>

                    {
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Select Mode of Payment</FormLabel>
                        <RadioGroup aria-label="paymentMode" name="paymentMode" value={this.state.selectedPaymentMethod} onChange={this.handlePaymentOptionChange}>
                          {

                            this.state.allPaymentsList.map(
                              payment => (
                                <FormControlLabel value={payment.id} control={<Radio />} label={payment.payment_name} />
                              )
                            )

                          }
                        </RadioGroup>
                      </FormControl>
                    }

                  </div>
                  <Button
                    style={{ width: 40, fontSize: 12, marginRight: 10 }}
                    onClick={this.goBackToAddressStepHandler}
                  >
                    BACK
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: 40, fontSize: 12 }}
                    onClick={this.finishCheckoutHandler}
                  >
                    FINISH
                  </Button>
                </StepContent>
              </Step>
            </Stepper>
            {
              this.state.isFinished &&
              <div style={{ marginLeft: 20 }}>
                <h3>View the summary and place your order now!</h3>
                <Button
                  style={{ width: 40, fontSize: 12 }}
                  onClick={this.changeCheckoutDetailsHandler}
                >
                  CHANGE
                  </Button>
              </div>
            }
          </div>


        </Grid>
        <Grid item xs={12} md={4}>
          <MyCartCard badgeCount={0} totalBill={this.state.totalBill} itemQuantityArray={this.state.itemQuantities} addRemoveItemHandler={null} restaurantName={this.state.restaurantName} placeOrderHandler={this} isFinished={this.state.isFinished} />
        </Grid>
      </Grid>

    </div>
  }


  getAllAddresses = () => {
    var accessToken = sessionStorage.getItem("access-token");
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          that.setState({
            allAddressesList: JSON.parse(this.responseText).addresses,
          });
        }

      }
    });

    xhr.open("GET", "http://localhost:8080/api/address/customer");
    xhr.setRequestHeader("authorization", "Bearer " + accessToken);
    xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
    /*
        {
  "Accept": "application/json;charset=UTF-8"
}
        */
    xhr.send(data);
  }


  saveAddressApiCall = () => {
    var accessToken = sessionStorage.getItem("access-token");
    let that = this;
    var city = this.state.selectedCity;
    var flat = this.state.selectedFlat;
    var locality = this.state.selectedLocality;
    var pincode = this.state.selectedPincode;
    var state = this.state.selectedState;
    // console.log(city);
    // console.log(flat);
    // console.log(locality);
    // console.log(pincode);
    // console.log(state);
    let dataAddress = JSON.stringify({
      city: city,
      flat_building_name: flat,
      locality: locality,
      pincode: pincode,
      state_uuid: state
    });

    console.log();


    //       let that = this;
    // let dataSignUp = JSON.stringify({
    //   contact_number: this.state.contact,
    //   email_address: this.state.email,
    //   first_name: this.state.firstName,
    //   last_name: this.state.lastName,
    //   password: this.state.psw,
    // });


    let xhrAddress = new XMLHttpRequest();
    xhrAddress.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 201) {
          that.setState({ tabSelected: 0 });
          that.getAllAddresses();
        }
      }

    });

    xhrAddress.open("POST", "http://localhost:8080/api/address");
    xhrAddress.setRequestHeader("authorization", "Bearer " + accessToken);;
    xhrAddress.setRequestHeader("Accept", "application/json;charset=UTF-8");
    xhrAddress.setRequestHeader("Content-Type", "application/json");
    xhrAddress.setRequestHeader("Cache-Control", "no-cache");
    xhrAddress.send(dataAddress);
  };


  // get All States API call
  getAllStates = () => {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          that.setState({
            allStatesList: JSON.parse(this.responseText).states,
          });
        }

      }
    });

    xhr.open("GET", "http://localhost:8080/api/states");
    xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
    /*
        {
  "Accept": "application/json;charset=UTF-8"
}
        */
    xhr.send(data);
  }


  //get All Payments API call
  getAllPayments = () => {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          that.setState({
            allPaymentsList: JSON.parse(this.responseText).paymentMethods,
          });
        }

      }
    });

    xhr.open("GET", "http://localhost:8080/api/payment");
    xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
    /*
        {
  "Accept": "application/json;charset=UTF-8"
}
        */
    xhr.send(data);
  }

  //save Order Api Call
  saveOrderApiCall = () => {
    var accessToken = sessionStorage.getItem("access-token");
    let that = this;
    var item_quantities = [];
    this.state.itemQuantities.forEach(element => {
      if (element.itemQuantityObject.itemQuantity > 0) {
        item_quantities.push({
          item_id: element.itemQuantityObject.itemId,
          price: element.itemQuantityObject.itemPrice,
          quantity: element.itemQuantityObject.itemQuantity,
        });
      }
    });
    let dataAddress = JSON.stringify({
      address_id: this.state.selectedAddressId,
      bill: this.state.totalBill,
      coupon_id: '2ddf65fe-ecd0-11e8-8eb2-f2801f1b9fd1',
      discount: this.state.totalBill / 2,
      item_quantities: item_quantities,
      payment_id: this.state.selectedPaymentMethod,
      restaurant_id: this.state.restaurantId
    });


    let xhrAddress = new XMLHttpRequest();
    xhrAddress.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 201) {
          var orderPlacedId = JSON.parse(this.responseText).id;
          that.setState({ placeOrderSuccessMessageClass: 'show', successOrderID: orderPlacedId });
          // After 3 seconds, remove the show class from DIV
          setTimeout(function () {
            that.setState({ placeOrderSuccessMessageClass: "" });
          }, 3000);
        }

        else {

          that.setState({ placeOrderFailedMessageClass: 'show' });
          // After 3 seconds, remove the show class from DIV
          setTimeout(function () {
            that.setState({ placeOrderFailedMessageClass: "" });
          }, 3000);
        }

      }

    });

    xhrAddress.open("POST", "http://localhost:8080/api/order");
    xhrAddress.setRequestHeader("authorization", "Bearer " + accessToken);;
    xhrAddress.setRequestHeader("Accept", "application/json;charset=UTF-8");
    xhrAddress.setRequestHeader("Content-Type", "application/json");
    xhrAddress.setRequestHeader("Cache-Control", "no-cache");
    xhrAddress.send(dataAddress);
  };


}

export default Checkout;