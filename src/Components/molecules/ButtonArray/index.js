import React, {Component} from 'react';
import styled from 'styled-components';

import RoundButton from "../../atoms/RoundButton/index";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem , 1fr));
    grid-template-rows: 1fr;
    grid-gap: 1rem
    grid-auto-flow: dense;
    justify-items: center;
    margin: 0 auto;
`;

class ButtonArray extends Component {


    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        )
    }
}

export default ButtonArray;