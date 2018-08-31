import React from 'react';

import { storiesOf } from '@storybook/react';

import RoundButton from '../Components/atoms/RoundButton/';
import ButtonArray from '../Components/molecules/ButtonArray/';
import Divider from '../Components/atoms/Divider/';
import Header from '../Components/organisms/Header/'

storiesOf('Atoms/Round Button', module).add('with text', () => <RoundButton title={"Title"}/>)

storiesOf('Molecules/Button Array', module).add('with three buttons', () => {
    return (
        <ButtonArray>
            <RoundButton title={"Title"}/>
            <RoundButton title={"Title"}/>
            <RoundButton title={"Title"}/>
        </ButtonArray>
    )
})

storiesOf('Atoms/Divider', module).add('simple', () => <Divider/>)

storiesOf('Organisms/Header', module).add('simple', () => <Header/>)