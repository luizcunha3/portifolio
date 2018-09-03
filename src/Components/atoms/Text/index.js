import React from 'react';
import styled from 'styled-components';

const CustomText = styled.p`
    color: #474747
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.075rem;
    font-size: 0.75em;
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
`

const Text = (props) => {
    return (
        <CustomText>{props.children}</CustomText>
    )
}

export default Text;
