import React, {Component} from 'react';
import { navigate } from '@reach/router';

import RoundButton from "../../atoms/RoundButton/";
import Divider from '../../atoms/Divider/'
import ButtonArray from '../../molecules/ButtonArray/'

class Header extends Component {


    render() {
        return (
            <div>
                <ButtonArray>
                    <RoundButton title={"Home"} action={() => navigate('/')}/>
                    <RoundButton title={"Sobre"}/>
                    <RoundButton title={"Currículo"} action={() => navigate('/curriculo')}/>
                    <RoundButton title={"Portifólio"}/>
                </ButtonArray>
                <Divider/>
            </div>
        )
    }
}

export default Header;