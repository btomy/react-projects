import React from 'react';
import Stars from './components/Stars.jsx';
import Button from './components/Button.jsx';
import Answer from './components/Answer.jsx';
import Numbers from './components/Numbers.jsx';
import DoneFrame from './components/DoneFrame.jsx';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedNumbers : [],
            randomNumberOfStars : Game.randomNumber(),
            answerIsCorrect : null,
            usedNumbers : [],
            reDraws : 5,
            doneStatus : null,
        }


        this._selectNumber = this._selectNumber.bind(this);
        this._unSelectNumber = this._unSelectNumber.bind(this);
        this._checkAnswer = this._checkAnswer.bind(this);
        this._acceptAnswer = this._acceptAnswer.bind(this);
        this._reDraw = this._reDraw.bind(this);
        this._updateDoneStatus = this._updateDoneStatus.bind(this);

    }

    static randomNumber = () => 1 + Math.floor(Math.random() * 9);

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
            randomNumberOfStars : Game.randomNumber(),
        })
    }

    _checkAnswer() {
        this.setState({
            answerIsCorrect : this.state.randomNumberOfStars === this.state.selectedNumbers.reduce( (acc,n) => acc + n, 0)
        })
    }

    _reDraw() {
        if (this.state.reDraws === 0) { return; }
        this.setState({
            randomNumberOfStars: Game.randomNumber(),
            answerIsCorrect: null,
            selectedNumbers: [],
            reDraws : this.state.reDraws - 1,
        })
    }

    _updateDoneStatus() {
        if (this.state.usedNumbers.length === 9) {
                this.setState({
                doneStatus: 'Done. Nice !'
            })
        } else if (this.state.reDraws === 0 && !this.possibleSolutions()) {
            this.setState({
                doneStatus : 'Game over!'
            })
        }
        
    }

    render(){
        const { selectedNumbers, randomNumberOfStars,answerIsCorrect, usedNumbers, reDraws,doneStatus } = this.state;

        return(
            <div className="container">
                <h3>Play nine </h3>
                <div className='row'>
                    <Stars 
                    numberOfStars={randomNumberOfStars} />
                    <Button
                        reDraws = {this.state.reDraws}
                        reDraw = {this._reDraw}
                        acceptAnswer = {this._acceptAnswer}
                        chekAnswer = {this._checkAnswer}
                        answerIsCorrect = {answerIsCorrect} 
                        selectedNumbers = {selectedNumbers} />
                    <Answer
                        unSelectedNumbers = {this._unSelectNumber} 
                        selectedNumbers = {selectedNumbers} />
                    
                     <br />
                    {doneStatus ? 
                        <DoneFrame doneStatus={doneStatus} /> : 
                        <Numbers
                            usedNumbers= {usedNumbers}
                            selectNumber = {this._selectNumber}
                            selectedNumbers={selectedNumbers}/>
                    }
                </div>
            </div>
        )
    }
}

export default Game;