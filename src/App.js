import React, {Component} from 'react';
import './App.css';

import Header from './Components/organisms/Header/';
import Footer from './Components/organisms/Footer/';
import Home from './Components/organisms/Home/';

import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100%
    margin: 5rem 20rem
    @media (min-width: 320px) {
        margin: 2.5rem auto;
        max-width: 90%
    }
`
class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header/>
                <Home/>
                <Footer/>
            </Wrapper>
        );
    }
}

export default App;
