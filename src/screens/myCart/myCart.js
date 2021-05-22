import React, { Component } from 'react';
import './myCart.css';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MyCartItems from '../myCartItems/myCartItems';
import Button from '@material-ui/core/Button';

class MyCartCard extends Component {
    /*
    {
                        this.props.itemQuantityArray.forEach(item => {
                            console.log(item);
                          })
                    }
    */

                    // componentWillMount() {
                    //     this.props.itemQuantityArray.forEach(item => {
                    //         console.log(item.itemQuantityObject.itemName);
                    //       })
                    // }


                    removeItemFromCart = (itemId) => {
                        this.props.addRemoveItemHandler.removeItemFromCart(itemId);

                    }

                    addItemToCart = (itemId) => {
                        this.props.addRemoveItemHandler.addItemToCart(itemId);
                    }

                    checkoutClickHandler = () => {
                        this.props.addRemoveItemHandler.checkout();
                    }

    render() {
        return <div className="myCartCard-div">
            <Card>
                <div className="myCart-header">

                    <Badge badgeContent={this.props.badgeCount} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                    <p>My Cart</p>
                </div>
                <div className="myCart-body">
                    {this.props.itemQuantityArray.map(element => (
                        <div>
                        {element.itemQuantityObject.itemQuantity>0 && <MyCartItems itemId={element.itemQuantityObject.itemId} itemName={element.itemQuantityObject.itemName} itemQuantity={element.itemQuantityObject.itemQuantity} itemPrice={element.itemQuantityObject.itemPrice} isVeg={element.itemQuantityObject.isVeg} addRemoveItemHandler={this}/>
    }</div>
                            ))
                    }
                </div>
                <div className="myCart-footer">
                    <div className="myCart-totalPrice">
                        <p>TOTAL AMOUNT</p>
                        <div className="space-between-total-price">

                        </div>
                        <p>{"₹ " + this.props.totalBill}</p>
                    </div>
                    <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.checkoutClickHandler}>
                        Checkout
</Button>
                </div>
            </Card>
        </div>
    }
}

export default MyCartCard;
