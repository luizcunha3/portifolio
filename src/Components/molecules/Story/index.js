import React from "react";
import styled from 'styled-components';

const techlist = (list) => {
    return list.join(', ');
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.3rem 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "bullet date date . . . . "
        "bullet role role role . . ."
        "bullet company company company company . ."
        "bullet content content content content content content"
        "bullet tech tech tech tech tech .";
    margin-left: 1.5rem;
    margin-right: 2rem;
    @media (max-width: 414px) {
        grid-template-areas: 
            "bullet date date date date . . "
            "bullet role role . . . ."
            "bullet company company . . . ."
            "bullet content content content content content content"
            "bullet tech tech tech tech tech .";
         margin-left: 0rem;
            
    }
`;

const Text = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    padding-top: 0.2rem;
    padding-left: 1rem;
`;


const DateField = styled(Text)`
    grid-area: date;
    color: #a8a8a8;
    font-size: 0.8rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.1rem;
`;

const Company = styled(Text)`
    grid-area: company;
    color: #666666;
    // letter-spacing: 0.1rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-top: 0.1rem;
    margin-bottom: 0;
`;

const Role = styled(Text)`
    grid-area: role;
    color: #222222;
    // letter-spacing: 0.1rem;
    font-size: 1.5rem;
    margin-left: 0.5rem;
    margin-top: 0.1rem;
    margin-bottom: 0;
`;

const Content = styled.p`
    grid-area: content;
    margin-left: 0.5rem;
    line-height: 1.5;
    font-family: 'Source Sans Pro', sans-serif;
    padding-top: 0.2rem;
    padding-left: 1rem;
    width: 100%;
    color: #222222;
    text-align: justify;
    
`;

const Tech = styled(Text)`
    grid-area: tech;
    color: #666666;
    margin-left: 0.5rem;
    font-size: 0.9rem;
`;

const Bullet = styled.div`
    background-color: #F7941E;
    grid-area: bullet;
    margin-right: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-right: 0
`;

const Story = (props) => {
    return (
        <Wrapper>
            <Bullet/>
            <DateField>{props.begin} - {props.end}</DateField>
            <Role>{props.role}</Role>
            <Company field="company">{props.place}</Company>
            <Content field="content">{props.about}</Content>
            <Tech field="tech"><i>Tecnologias: {techlist(props.tech)}</i></Tech>
        </Wrapper>
    )
};

export default Story;