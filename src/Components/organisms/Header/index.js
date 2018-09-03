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
                    <RoundButton title={"Home"}/>
                    <RoundButton title={"Sobre"}/>
                    <RoundButton title={"Currículo"}/>
                    <RoundButton title={"Portifólio"}/>
                </ButtonArray>
                <Divider/>
            </div>
        )
    }
}

export default Header;