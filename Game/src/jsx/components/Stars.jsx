import React from "react";

const Stars = (props) => {

    let stars =[];
    for (let i = 0; i < props.numberOfStars; i++) {
        stars.push(<i className="material-icons" key={i}>star</i>);
    }


    return( 
        <div>
            {stars}
        </div>
    )
}


export default Stars;