import React from "react";

const Numbers = (props) => {

    const numbers = [...Array(10).keys()];
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used';
        }
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }
    
    return( 
        <div className='card-panel grey center-align'>
            {numbers.map( (number,i) => {
                return <span 
                        className={numberClassName(number)}
                        onClick ={() => props.selectNumber(number)} 
                        key={i}>{number}</span>
            })}
        </div>
    )
}


export default Numbers;