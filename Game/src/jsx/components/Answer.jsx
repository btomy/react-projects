import React from "react";

const Answer = (props) => {


    return( 
        <div className="col-xs-5">
            {props.selectedNumbers.map( (number,i) => {
               return <span key={i} onClick={() => props.unSelectedNumbers(number)} >
                   {number}
                   </span>
            })}
        </div>
    )
}


export default Answer;