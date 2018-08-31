import React from 'react';

import { storiesOf } from '@storybook/react';

import RoundButton from '../Components/atoms/RoundButton/';
import ButtonArray from '../Components/molecules/ButtonArray/'

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