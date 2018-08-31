import React from 'react';
import styled from 'styled-components';

const DividerElement = styled.hr`
    border: solid 0.8px #CCCCCC;
    margin: 0 auto;
    border-radius: 1rem;
    margin-top: 1.5rem;
    
`

const Divider = (props) => {
    return (
        <DividerElement/>
    )
}

export default Divider;