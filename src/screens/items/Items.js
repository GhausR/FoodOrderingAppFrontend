import React, { Component } from 'react';
import './Items.css';
import { green, red } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
class Items extends Component {
render() {
    return <div className="items-adding-component">
        <FiberManualRecordIcon fontSize="small" style={{ color: (this.props.isVeg?green[500]: red[500])}}/>
        <p className="item-name-para">{this.props.itemName}</p>
        <p>₹</p>
        <p>{this.props.itemPrice}</p>
        <div onClick={this.addItemToCartHandler}>
        <AddIcon fontSize="small"/>
        </div>
        
    </div>;
}

addItemToCartHandler = () => {
    this.props.addItemHandler.addItemToCart(this.props.itemId);
}
}

export default Items;
