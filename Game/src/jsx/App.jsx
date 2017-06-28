import React from "react";
import Game from './Game.jsx';

class App extends React.Component {
    render() {
        return(
            <div>
                <Game />
                <Game />
            </div>
        )
    }
}

export default App;