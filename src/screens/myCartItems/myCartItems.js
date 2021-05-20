import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import '../myCartItems/myCartItems.css';
import { green, red } from '@material-ui/core/colors';
class MyCartItems extends Component {
    render() {
        return <div>
            <Grid container>
                <Grid item xs={2}>
                    <RadioButtonCheckedIcon fontSize="small" style={{ color: (this.props.isVeg?green[500]: red[500])}}/>
                </Grid>
                <Grid item xs={4}>
                    <p>{this.props.itemName}</p>
                </Grid>
                <Grid item xs={2}>
                    <div className="add-remove-items-div">
                    <RemoveIcon/>
                    <p>{this.props.itemQuantity}</p>
                    <AddIcon/>
                    </div>
                    
                </Grid>
                <Grid item xs={4}>
                    <p>{"₹ " + this.props.itemTotalPrice}</p>
                </Grid>
            </Grid>
        </div>
    }
}

export default MyCartItems;