import React, {Component} from 'react';
import styled from 'styled-components';

import Header from '../Header/';
import Footer from '../Footer/';
import ProfilePicture from '../../atoms/ProfilePicture/';
import LuizImage from '../../../images/luiz_cropped.jpg';
import Title from '../../atoms/Title/';
import Subtitle from '../../atoms/SubTitle';
import Divider from "../../atoms/Divider";
import Text from "../../atoms/Text/"

const Centralize = styled.div`
    margin: 0 auto;
    
`;
class Home extends Component {

    render() {
        return (
            <div>
                <ProfilePicture image={LuizImage}/>
                <Title>Luiz Cunha</Title>
                <Divider content/>
                <Subtitle>Engenheiro de Software</Subtitle>
                <Text>Atualmente trabalhando com <strong>Node</strong> e <strong>React</strong>.</Text>
            </div>
        )
    }
}

export default Home;