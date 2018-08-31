import React, {Component} from 'react';
import styled from 'styled-components';

import RoundButton from "../../atoms/RoundButton/";
import Divider from '../../atoms/Divider/'
import ButtonArray from '../../molecules/ButtonArray/'

const Wrapper = styled.div`
    
`;

class Header extends Component {


    render() {
        return (
            <div>
                <ButtonArray>
                    <RoundButton title={"Title"}/>
                    <RoundButton title={"Title"}/>
                    <RoundButton title={"Title"}/>
                    <RoundButton title={"Title"}/>
                </ButtonArray>
                <Divider/>
            </div>
        )
    }
}

export default Header;