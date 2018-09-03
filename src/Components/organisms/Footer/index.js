import React, {Component} from 'react';

import RoundButton from "../../atoms/RoundButton/";
import Divider from '../../atoms/Divider/'
import ButtonArray from '../../molecules/ButtonArray/'


class Footer extends Component {

    render() {
        return (
            <div>
                <Divider/>
                <ButtonArray footer>
                    <RoundButton brand="github" address="https://github.com/luizcunha3/"/>
                    <RoundButton brand="linkedin" address="https://www.linkedin.com/in/luiz-cunha-5101b232/"/>
                    <RoundButton brand="mail" address="mailto:luizcunha3%40gmail%2ecom"/>
                    <RoundButton brand="twitter" address="https://twitter.com/luizcunha3"/>
                </ButtonArray>
            </div>
        )
    }
}

export default Footer;