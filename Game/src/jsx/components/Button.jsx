import React from "react";

const Button = (props) => {

let button;

switch (props.answerIsCorrect) {

    case true:
        button = <button className="btn success">
                    <i className="material-icons" >done</i>
                </button>;
        break;

    case false:
        button = <button className="btn">
                    <i className="material-icons" >error</i>
                </button>;
        break;

    default:
        button = <button className="btn" 
                    disabled={props.selectedNumbers.length === 0} 
                    onClick={props.chekAnswer}>
                    =
                </button>
        break;
}

    return( 
        <div>
            {button}
        </div>
    )
}


export default Button;