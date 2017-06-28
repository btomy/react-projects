import React from "react";

class Answer extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        const options = this.props.options.map( (option,i) => {
                return <div className={`option${i}`} key={i}>
                    <input type="radio" name='rad' id={`option_${i}`} onChange={this.props.handleRadio.bind(this, i)} />
                    <label htmlFor={`option_${i}`} > {option} </label>
                </div>
            });

        return(
            <form onSubmit={this.props.onClickCallback}>
                {options}
                <input 
                    type="submit"
                    className='waves-effect waves-light btn-large submit-button visible'
                    onClick={this.props.onClickCallback} 
                    disabled={ this.props.selectionMade ? '' : 'disabled'} />
            </form>
        )
    }
}


export default Answer;