import React from "react";

const Answer = props => (
    <form onSubmit={props.onClickCallback}>
        {props.options.map((option,i) => (
            <div className={`option${i}`} key={i}>
                <input
                    type="radio"
                    name='rad'
                    id={`option_${i}`}
                    onChange={() => {
                        props.handleRadio(i)
                    }}
                />
                <label htmlFor={`option_${i}`}>
                    {option}
                </label>
            </div>
        ))}

        <input
            type="submit"
            className='waves-effect waves-light btn-large submit-button visible'
            onClick={props.onClickCallback}
            disabled={!props.selectionMade}
        />
    </form>
);

export default Answer;
