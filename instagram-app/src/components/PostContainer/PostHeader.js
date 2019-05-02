import React from 'react';
import './postcontainer.css';
import styled from 'styled-components';



const PostHead = styled.div`
    display: flex;
    align-items: center;
`

const UserThumbnail = styled.img`
    margin: 20px;
    height: 40px;
    border-radius: 50%;

    @media (max-width: 500px) {
        margin: 10px;
    }
`

const UserName = styled.div`
    font-weight: 800;
`

const PostHeader = props => {
    return (
        <PostHead>  
            <UserThumbnail src={props.thumbnailUrl} />                
            <UserName>{props.username}</UserName>            
        </PostHead>     
    );
}

export default PostHeader;