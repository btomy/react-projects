import React from 'react';
import Stars from './components/Stars.jsx';
import Button from './components/Button.jsx';
import Answer from './components/Answer.jsx';
import Numbers from './components/Numbers.jsx';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedNumbers : []
        }

        this._selectNumber = this._selectNumber.bind(this);
    }

    _selectNumber(clickedNumber) {
       this.setState({
           selectedNumbers : this.state.selectedNumbers.concat(clickedNumber)
       })
    }


    render(){
        return(
            <div className="container">
                <h3>Play nine </h3>
                <Stars />
                <Button />
                <Answer selectedNumbers={this.state.selectedNumbers} />
                <Numbers
                    selectNumber = {this._selectNumber}
                    selectedNumbers={this.state.selectedNumbers}/>
            </div>
        )
    }
}

export default Game;