import React, {Component} from 'react';
import './App.css';

import Index from './Components/atoms/RoundButton/index'

class App extends Component {
    render() {
        return (
            <div className={"gridContainer"}>
                <Index title={"oier"} action={() => alert("clicou viado")}/>
            </div>
        );
    }
}

export default App;
