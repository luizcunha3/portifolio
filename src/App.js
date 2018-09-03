import React, {Component} from 'react';
import './App.css';

import Header from './Components/organisms/Header/';
import Footer from './Components/organisms/Footer/';
import Home from './Components/organisms/Home/';

library.add(linkedin)

class App extends Component {
    render() {
        return (
            <div className={"gridContainer"}>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
