import React from "react";

const Stars = (props) => {

    let stars =[];
    for (let i = 0; i < props.numberOfStars; i++) {
        stars.push(<i className="material-icons" key={i}>star</i>);
    }


    return( 
        <div className='col-xs-5'>
            {stars}
        </div>
    )
}


export default Stars;