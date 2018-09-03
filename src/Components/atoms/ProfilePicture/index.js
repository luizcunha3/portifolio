import React from 'react';
import styled from 'styled-components';



const ProfilePictureContainer = styled.div`
    overflow: hidden;
    display: block;
    text-align: center;
    padding-top: 30px;
`;
const ProfilePictureImage = styled.img`
    width: 9rem;
    border-radius: 100%;
    display: inline-block;
`;

const ProfilePicture = (props) => {
    return (
        <ProfilePictureContainer>
            <ProfilePictureImage src={props.image}/>
        </ProfilePictureContainer>
    )
}

export default ProfilePicture;
