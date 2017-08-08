import React from "react";

const Expenses = (props) =>{

	

    return( 
        <div className="questionWrapper" >
            <div className='questions'>
                <form>
                    
                    <label>
                        Income: <input type="number" name="income" />
                        <select>
                            <option value="grapefruit">Monthly</option>
                            <option value="lime">Yearly</option>
                        </select>
                    </label>
                    


                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}


export default Expenses;