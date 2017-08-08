import React from "react";

import Expenses from "./components/Expenses.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            
        }
    }

    render() {
        
        return(
            <div className="container" >
                <h1>Typehead</h1>
                <div className="questionWrapper" >
                  <Expenses />
                </div>
                
            </div>
        )
    }
}

export default App;