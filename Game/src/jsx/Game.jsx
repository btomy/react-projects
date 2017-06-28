import React from 'react';
import Stars from './components/Stars.jsx';
import Button from './components/Button.jsx';
import Answer from './components/Answer.jsx';

class Game extends React.Component{
    constructor(props) {
        super(props);

    }


    render(){
        return(
            <div>
                <h3>Play nine </h3>
                <Stars />
                <Button />
                <Answe />
            </div>
        )
    }
}

export default Game;