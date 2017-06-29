import React from "react";

import Question from "./components/Question.jsx";
import Answer from "./components/Answer.jsx";
import config from '../config.json';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            quiz: config.quiz,
            index: 0,
            numberOfQuestions: config.quiz.length,
            answers : [],
            score : 0,
            completed: false,
            buttonEnabled : false,
            selectionMade: false
        }

        this._data = {
            selection: null
        };

        this._handleAnswerSelected = this._handleAnswerSelected.bind(this);
        this._handleRadio = this._handleRadio.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleRadio(index) {
        this._data.selection = index;

        this.setState({
            buttonEnabled: true,
            selectionMade: true
        });

    }

     _handleSubmit() {
        if (this.state.index + 1 < this.state.numberOfQuestions) {
                this.setState({
                    index : this.state.index + 1
                })
            } else {
                this.setState({
                    completed : true
                })
            }

        if (this.state.selectionMade){
            this._handleAnswerSelected();
        }
    }

    _handleAnswerSelected() {
        const options = this.state.quiz[this.state.index].options;
        const selection = options[this._data.selection];
        const correctAnswer = this.state.quiz[this.state.index].answer;

        this.setState({
            answers : [...this.state.answers,selection],
            score: (correctAnswer === selection) ? this.state.score + 1 : this.state.score,
            selectionMade:false
        })

    }


    render() {

        const quizCompleted =   <div>
                                    <h1> Quiz completed ! </h1>
                                </div>;
        const quiz = <div>
                        <Question question={this.state.quiz[this.state.index].question} />
                        <Answer
                            handleRadio = {this._handleRadio}
                            buttonEnabled = {this.state.buttonEnabled}
                            selectionMade = {this.state.selectionMade}
                            options={this.state.quiz[this.state.index].options}
                            onClickCallback = {this._handleSubmit} />
                    </div>;
        const quizStage = !this.state.completed ? quiz : quizCompleted ;

        return(
            <div className="container" >
                <h1>React Quiz</h1>
                <div className="questionWrapper" >
                    {quizStage}
                </div>

            </div>
        )
    }
}

export default App;
