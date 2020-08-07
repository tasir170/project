import React from 'react';
function Dinner(props){
    return(
        <div>
        <h1> today we are severing {props.dishName} </h1>
        <h1> today we are severing{props.sweetDish}</h1>
       
        <br />
    </div>
        )

}
export default Dinner;