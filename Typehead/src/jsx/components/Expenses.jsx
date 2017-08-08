import React from "react";

const Expenses = (props) =>{

	

    return( 
        <div className="questionWrapper" >
            <div className='questions'>
                <form>
                    
                    <label>
                       Type something <input type="number" name="income" />
                    </label>
                </form>
            </div>
        </div>
    )
}


export default Expenses;