import React from 'react';
import './Categories.css';

function Categories(props) {
    return <div>
        <p>{props.categoryName}</p>
        <hr/>
    </div>;
}

export default Categories;