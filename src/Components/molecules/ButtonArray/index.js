import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${props => props.footer ? '1rem' : '8rem'} , 1fr));
    grid-template-rows: 1fr;
    grid-gap: 1rem
    grid-auto-flow: dense;
    justify-items: center;
    margin: 0 auto;
    ${props => props.footer ? 'width: 30%' : '' }
    ${props => props.footer ? 'padding-top: 25px' : ''}
    ${props => props.footer ? 'padding-bottom: 25px' : ''}
    
     @media (max-width: 414px) {
        ${props => props.footer ? 'width: 80%' : '' }
    }
    
   
    
`;

class ButtonArray extends Component {


    render() {
        return (
            <Wrapper footer={this.props.footer}>
                {this.props.children}
            </Wrapper>
        )
    }
}

export default ButtonArray;