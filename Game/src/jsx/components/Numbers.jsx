import React from "react";

const Numbers = (props) => {

    const numbers = [...Array(10).keys()];
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }
    
    return( 
        <div className='card-panel grey center-align'>
            {numbers.map( (number,i) => {
                return <span 
                        className={numberClassName(number)}
                        onClick ={() => props.selectedNumbers} 
                        key={i}>{number}</span>
            })}
        </div>
    )
}


export default Numbers;