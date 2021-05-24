import React, { Component } from 'react';
import './myCart.css';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MyCartItems from '../myCartItems/myCartItems';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

class MyCartCard extends Component {
    // remove Items From my Cart
    removeItemFromCart = (itemId) => {
        this.props.addRemoveItemHandler.removeItemFromCart(itemId);

    }

    // add Items To my Cart
    addItemToCart = (itemId) => {
        this.props.addRemoveItemHandler.addItemToCart(itemId);
    }

    // checkout button Click Handler
    checkoutClickHandler = () => {
        if (this.props.addRemoveItemHandler !== null) {
            this.props.addRemoveItemHandler.checkout();
        }
        if ((this.props.addRemoveItemHandler === null) && !(this.state.showPlaceOrderDetails) && (this.props.isFinished)) {
            this.setState({ showPlaceOrderDetails: true });
        }
        if ((this.props.addRemoveItemHandler === null) && (this.state.showPlaceOrderDetails)) {
            this.props.placeOrderHandler.saveOrderApiCall();
        }
    }
    constructor() {
        super();
        this.state = {
            mainDivClass: 'myCartCard-div',
            showPlaceOrderDetails: false,
        }
    }
    componentWillMount() {
        if (this.props.addRemoveItemHandler === null) {
            this.setState({ mainDivClass: 'myCartCard2-div' })
        }
    }

    render() {
        return <div className={this.state.mainDivClass}>
            <Card>
                <div className="myCart-header">
                    {this.props.addRemoveItemHandler !== null &&
                        <div>

                            <Badge badgeContent={this.props.badgeCount} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                            <p>My Cart</p></div>
                    }
                    {this.props.addRemoveItemHandler === null &&
                        <div>
                            <p className="SummaryHeading">Summary</p>
                            <p className="RestaurantNameHeading">{this.props.restaurantName}</p>
                        </div>
                    }
                </div>
                <div className="myCart-body">
                    {this.props.itemQuantityArray.map(element => (
                        <div>
                            {element.itemQuantityObject.itemQuantity > 0 && <MyCartItems itemId={element.itemQuantityObject.itemId} itemName={element.itemQuantityObject.itemName} itemQuantity={element.itemQuantityObject.itemQuantity} itemPrice={element.itemQuantityObject.itemPrice} isVeg={element.itemQuantityObject.isVeg} addRemoveItemHandler={this.props.addRemoveItemHandler === null ? null : this} />
                            }</div>
                    ))
                    }
                </div>
                <div>
                    {
                        (this.props.addRemoveItemHandler === null && this.state.showPlaceOrderDetails) &&
                        <div>
                            <div className="myCart-footer">
                                <TextField defaultValue='FLAT 50' disabled />
                                <Button
                                    style={{ width: 40, fontSize: 12, marginLeft: 10 }}
                                    variant="contained" disabled
                                >
                                    APPLY
                  </Button>
                            </div>
                            <div className="myCart-footer">
                                <div className="myCart-totalPrice">
                                    <p>SUBTOTAL</p>
                                    <div className="space-between-SUBTOTAL-price">
                                    </div>
                                    <p>{"₹ " + this.props.totalBill}</p>
                                </div>
                                <div className="myCart-totalPrice">
                                    <p>DISCOUNT</p>
                                    <div className="space-between-SUBTOTAL-price">
                                    </div>
                                    <p>{"₹ " + ((this.props.totalBill) / 2)}</p>
                                </div>

                                <hr />
                            </div>
                        </div>
                    }
                </div>
                <div className="myCart-footer">
                    <div className="myCart-totalPrice">
                        <p>{this.props.addRemoveItemHandler === null ? 'NET AMOUNT' : 'TOTAL AMOUNT'}</p>
                        <div className="space-between-total-price">

                        </div>
                        <p>{"₹ " + (this.props.addRemoveItemHandler === null ? (this.state.showPlaceOrderDetails ? (this.props.totalBill / 2) : (this.props.totalBill)) : (this.props.totalBill))}</p>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.checkoutClickHandler}>
                        {this.props.addRemoveItemHandler === null ? 'PLACE ORDER' : 'Checkout'}
                    </Button>
                </div>
            </Card>
        </div>
    }
}

export default MyCartCard;
