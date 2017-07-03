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
            randomNumberOfStars : 1 + Math.floor(Math.random() * 9),
            answerIsCorrect : null,
            usedNumbers : [],
            reDraws : 5,
        }

        this._selectNumber = this._selectNumber.bind(this);
        this._unSelectNumber = this._unSelectNumber.bind(this);
        this._checkAnswer = this._checkAnswer.bind(this);
        this._acceptAnswer = this._acceptAnswer.bind(this);
        this._reDraw = this._reDraw.bind(this);
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
        this.setState({
            usedNumbers : this.state.usedNumbers.concat(this.state.selectedNumbers),
            selectedNumbers : [],
            answerIsCorrect : null,
            randomNumberOfStars : 1 + Math.floor(Math.random() * 9),
        })
    }

    _checkAnswer() {
        this.setState({
            answerIsCorrect : this.state.randomNumberOfStars === this.state.selectedNumbers.reduce( (acc,n) => acc + n, 0)
        })
    }

    _reDraw() {
        this.setState({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            answerIsCorrect: null,
            selectedNumbers: [],
        })
    }


    render(){
        const { selectedNumbers, randomNumberOfStars,answerIsCorrect, usedNumbers, reDraws } = this.state;

        return(
            <div className="container">
                <h3>Play nine </h3>
                <div className='row'>
                    <Stars 
                    numberOfStars={randomNumberOfStars} />
                    <Button
                        reDraw = {this._reDraw}
                        acceptAnswer = {this._acceptAnswer}
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
                
            </div>
        )
    }
}

export default Game;