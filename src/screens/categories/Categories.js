import React from 'react';
import './Categories.css';


// Categories of food items component
function Categories(props) {
    return <div>
        <p>{props.categoryName}</p>
        <hr />
    </div>;
}

export default Categories;