import React from 'react';
import './Items.css';
import { green, red } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
function Items(props) {
    return <div className="items-adding-component">
        <FiberManualRecordIcon fontSize="small" style={{ color: (props.isVeg?green[500]: red[500])}}/>
        <p className="item-name-para">{props.itemName}</p>
        <p>₹</p>
        <p>{props.itemPrice}</p>
        <AddIcon fontSize="small"/>
    </div>;
}

export default Items;
