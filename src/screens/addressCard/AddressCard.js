import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from "@material-ui/core/Grid";
import { green, grey } from '@material-ui/core/colors';


// address card for checkout page
function AddressCard(props) {
    return <div>
        <p>{props.Flat}</p>
        <p>{props.Locality}</p>
        <p>{props.City}</p>
        <p>{props.State}</p>
        <p>{props.Pincode}</p>
        <Grid container>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={2}>
                <CheckCircleIcon style={{ color: (props.isSelected ? green[500] : grey[500]) }} />
            </Grid>

        </Grid>

    </div>
}

export default AddressCard;