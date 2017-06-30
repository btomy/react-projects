import React from 'react';
import Stars from './components/Stars.jsx';
import Button from './components/Button.jsx';
import Answer from './components/Answer.jsx';
import Numbers from './components/Numbers.jsx';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedNumbers : [],
            randomNumberOfStars : Math.floor(Math.random() * 9),
            answerIsCorrect : null,
            usedNumbers : [4,5],
        }

        this._selectNumber = this._selectNumber.bind(this);
        this._unSelectNumber = this._unSelectNumber.bind(this);
        this._checkAnswer = this._checkAnswer.bind(this);
        this._acceptAnswer = this._acceptAnswer.bind(this);
    }

    _selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >=0){
            return;
        }
       this.setState({
           answerIsCorrect: null,
           selectedNumbers : this.state.selectedNumbers.concat(clickedNumber)
       })
    }

    _unSelectNumber(clickedNumber) {
        this.setState({
            answerIsCorrect: null,
            selectedNumbers : this.state.selectedNumbers.filter(number => number !== clickedNumber)
        })
    }

    _acceptAnswer() {

    }

    _checkAnswer() {
        this.setState({
            answerIsCorrect : this.state.randomNumberOfStars === this.state.selectedNumbers.reduce( (acc,n) => acc + n, 0)
        })
    }


    render(){
        const { selectedNumbers, randomNumberOfStars,answerIsCorrect, usedNumbers } = this.state;

        return(
            <div className="container">
                <h3>Play nine </h3>
                <Stars 
                    numberOfStars={randomNumberOfStars} />
                <Button
                    chekAnswer = {this._checkAnswer}
                    answerIsCorrect = {answerIsCorrect} 
                    selectedNumbers = {selectedNumbers} />
                <Answer
                    unSelectedNumbers = {this._unSelectNumber} 
                    selectedNumbers = {selectedNumbers} />
                <Numbers
                    usedNumbers= {usedNumbers}
                    selectNumber = {this._selectNumber}
                    selectedNumbers={selectedNumbers}/>
            </div>
        )
    }
}

export default Game;