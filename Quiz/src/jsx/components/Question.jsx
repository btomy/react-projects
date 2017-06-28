import React from "react";

const Question = (props) =>{

	const QuestionObejct = props.quiz[props.index];

    return( 
        <div className="questionWrapper" >
            <div className='questions'>
                {QuestionObejct.question}
            </div>
        </div>
    )
}


export default Question;