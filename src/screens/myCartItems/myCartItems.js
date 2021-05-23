import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import '../myCartItems/myCartItems.css';
import { green, red } from '@material-ui/core/colors';
class MyCartItems extends Component {

//addRemoveItemHandler

removeItemHandler = () => {
    this.props.addRemoveItemHandler.removeItemFromCart(this.props.itemId);
}

addItemHandler = () => {
    this.props.addRemoveItemHandler.addItemToCart(this.props.itemId);
}


    render() {
        return <div>
            <Grid container>
                <Grid item xs={1}>
                    <div className="veg-non-veg-cart-icon-div">
                    <RadioButtonCheckedIcon fontSize="small" style={{ color: (this.props.isVeg?green[500]: red[500])}}/>
                    </div>
                    
                </Grid>
                <Grid item xs={5}>
                    <p>{this.props.itemName}</p>
                </Grid>
                <Grid item xs={4}>
                    <div className="add-remove-items-div">
                        {this.props.addRemoveItemHandler!==null && <div className="remove-item-icon" onClick={this.removeItemHandler}>
                        <RemoveIcon/>
                        </div>}
                    
                    <div className="itemQuantity-div">
                    <p>{this.props.itemQuantity}</p>
                    </div>
                    
                    {this.props.addRemoveItemHandler!==null && <div className="add-item-icon" onClick={this.addItemHandler}>
                    <AddIcon/>
                    </div>}
                    
                    </div>
                    
                </Grid>
                <Grid item xs={2}>
                    <p>{"₹ " + (this.props.itemPrice * this.props.itemQuantity)}</p>
                </Grid>
            </Grid>
        </div>
    }
}

export default MyCartItems;