import React from "react";

const Stars = (props) => {

    const numberOfStars = Math.floor(Math.random() * 9);
    let stars =[];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<i className="material-icons" key={i}>star</i>);
    }


    return( 
        <div>
            {stars}
        </div>
    )
}


export default Stars;