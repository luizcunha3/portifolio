import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.a`
    
    display: block;
    width: 7.925rem;
    height: 2.25rem;
    border: solid 1px #CCCCCC;
    border-radius: 1.25rem;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    max-width: 100%;
    line-height: 2.25rem;
    letter-spacing: 0.225rem;
    transition: color 0.25s ease, background-color 0.8s ease, border-color 0.25s ease;
    color: #474747;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.625rem
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    margin: 0rem 0.2rem;
    &:hover {
        color: #F7941E;
        border-color: #F7941E !important;
        transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
    }
`

const RoundButton = (props) => {
    return (
        <BtnContainer className={"button"} onClick={props.action}>{props.title}</BtnContainer>
    )
}

export default RoundButton;
