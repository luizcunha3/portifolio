import React from 'react';
import styled from 'styled-components';

const CustomLabel = styled.div`
    
`

const Label = (props) => {
    return (
        <CustomLabel>{props.text}</CustomLabel>
    )
}

export default Label;
