import React from 'react';
import styled from 'styled-components';

const SubtitleElement = styled.p`
    text-transform: uppercase;
    color: #474747;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.4rem;
    width: calc(100% + 0.8rem);
    font-weight: 400;
    text-align: center;
`

const SubHeading = (props) => {
    return <SubtitleElement>{props.children}</SubtitleElement>
};

export default SubHeading;