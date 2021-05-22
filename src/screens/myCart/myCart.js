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


                    removeItemFromCart = (itemName) => {
                        this.props.addRemoveItemHandler.removeItemFromCart(itemName);

                    }

                    addItemToCart = (itemName) => {
                        this.props.addRemoveItemHandler.addItemToCart(itemName);
                    }

    render() {
        return <div className="myCartCard-div">
            <Card>
                <div className="myCart-header">

                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                    <p>My Cart</p>
                </div>
                <div className="myCart-body">
                    {this.props.itemQuantityArray.map(element => (
                        <div>
                        {element.itemQuantityObject.itemQuantity>0 && <MyCartItems itemName={element.itemQuantityObject.itemName} itemQuantity={element.itemQuantityObject.itemQuantity} itemTotalPrice={element.itemQuantityObject.itemTotalPrice} isVeg={element.itemQuantityObject.isVeg} addRemoveItemHandler={this}/>
    }</div>
                            ))
                    }
                </div>
                <div className="myCart-footer">
                    <div className="myCart-totalPrice">
                        <p>TOTAL AMOUNT</p>
                        <div className="space-between-total-price">

                        </div>
                        <p>{"₹ " + 250}</p>
                    </div>
                    <Button variant="contained" color="primary">
                        Checkout
</Button>
                </div>
            </Card>
        </div>
    }
}

export default MyCartCard;
