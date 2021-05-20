import React, { Component } from 'react';
import './myCart.css';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MyCartItems from '../myCartItems/myCartItems';
import Button from '@material-ui/core/Button';

class MyCartCard extends Component {
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
                    <MyCartItems itemName="Chicken" itemQuantity={5} itemTotalPrice={250} isVeg={true} />
                    <MyCartItems itemName="Aloo Tamatar" itemQuantity={5} itemTotalPrice={250} isVeg={false} />
                    <MyCartItems itemName="Chicken" itemQuantity={5} itemTotalPrice={250} isVeg={true} />
                </div>
                <div className="myCart-footer">
                    <div className="myCart-totalPrice">
                        <p>TOTAL AMOUNT</p>
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
