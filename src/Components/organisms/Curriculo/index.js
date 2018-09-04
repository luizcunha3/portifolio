import React from "react";
import styled from 'styled-components';

import Story from '../../molecules/Story/';
import Divider from '../../atoms/Divider/'

const createStories = stories => {
    return stories.map(story => <div><Story role={story.role} place={story.place} begin={story.begin} end={story.end} about={story.about} tech={story.tech}/></div>);
};

const Wrapper = styled.div`
    margin-top: 1.5rem;
`;

const Curriculo = (props) => {

    return (
        <Wrapper>
            {props.stories ? createStories(props.stories) : ''}
        </Wrapper>
    )
};

export default Curriculo;