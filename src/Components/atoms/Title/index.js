import React from 'react';
import styled from 'styled-components';



const TitleContainer = styled.h1`
    text-transform: uppercase;
    color: #474747;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.4rem;
    width: calc(100% + 1.2rem);
    line-height: 1.25;
    font-weight: 400;
    text-align: center;
    
`;


const Title = (props) => {
    return (
        <TitleContainer>{props.children}</TitleContainer>
    )
};

export default Title;
