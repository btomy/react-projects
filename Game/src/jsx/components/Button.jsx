import React from "react";

const Button = (props) => {

let button;

switch (props.answerIsCorrect) {

    case true:
        button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                    <i className="material-icons" >done</i>
                </button>;
        break;

    case false:
        button = <button className="btn brn-danger">
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
        <div className='col-xs-2 text-center'>
            {button}
            <br /><br />
            <button className='btn btn-warning btn-sm' onClick={props.reDraw}>
                <i className="material-icons" >loop</i>
            </button>
        </div>
    )
}


export default Button;