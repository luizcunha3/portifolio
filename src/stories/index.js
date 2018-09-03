import React from 'react';

import { storiesOf } from '@storybook/react';

import RoundButton from '../Components/atoms/RoundButton/';
import Divider from '../Components/atoms/Divider/';
import ProfileImage from '../Components/atoms/ProfilePicture/';
import Title from '../Components/atoms/Title/';
import Subtitle from '../Components/atoms/SubTitle/';

import ButtonArray from '../Components/molecules/ButtonArray/';

import Header from '../Components/organisms/Header/';
import Footer from '../Components/organisms/Footer/';
import Home from '../Components/organisms/Home';

import LuizPicture from '../images/luiz_cropped.jpg';

const teste = event => {
    console.log('HAHAHAHAH', event)
}

storiesOf('Atoms/Round Button', module)
    .add('with text', () => <RoundButton title={"Title"}/>)
    .add('with github logo', () => <RoundButton brand="github"/>)
    .add('with mail logo', () => <RoundButton brand="mail"/>)
    .add('with linkedin logo', () => <RoundButton brand="linkedin"/>)
    .add('with twitter logo', () => <RoundButton brand="twitter"/>);

storiesOf('Atoms/ProfileImage', module).add('simple', () => <ProfileImage image={LuizPicture}/>);

storiesOf('Atoms/Divider', module)
    .add('simple', () => <Divider/>)
    .add('for content', () => <Divider content/>);

storiesOf('Atoms/Title', module).add('title', () => <Title>Luiz Cunha</Title>);

storiesOf('Atoms/SubTitle', module).add('subtitle', () => <Subtitle>Subtitle</Subtitle>);

storiesOf('Molecules/Button Array', module).add('with three buttons', () => {
    return (
        <ButtonArray>
            <RoundButton title={"Title"}/>
            <RoundButton title={"Title"}/>
            <RoundButton title={"Title"}/>
        </ButtonArray>
    )
});

storiesOf('Organisms/Header', module).add('simple', () => <Header/>);
storiesOf('Organisms/Footer', module).add('simple', () => <Footer/>);
storiesOf('Organisms/Home', module).add('home', () => <Home/>)
