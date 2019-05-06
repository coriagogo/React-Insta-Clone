import React from 'react';
import styled from 'styled-components';


const LikesContainer = styled.div`
    margin-left: 30px;

    @media (max-width: 500px) {
        margin-left: 10px;
    }
`

const LikesIcons = styled.div`
    display: flex;
    align-items: center;    
    padding: 10px 0;
    font-size: 24px;

    @media (max-width: 500px) {
        font-size: 18px;
        padding-bottom: 5px;
    }
`

const HeartIcon = styled.div`
    padding-right: 20px;
    cursor: pointer;

    &:hover {        
        color: #ff6f61;
    }

    @media (max-width: 500px) {
        padding-right: 10px;
    }
`

const CommentIcon = styled.div`

`

const LikesCount = styled.div`
    text-align: left;    
    font-size: 19px;

    @media (max-width: 500px) {
        font-size: 15px;
    }
`

const Likes = props => {
    return (
        <LikesContainer>
            <LikesIcons>
                <HeartIcon>
                    <i className="far fa-heart" onClick={props.addLike} />
                </HeartIcon>
                <CommentIcon>
                    <i className="far fa-comment" />
                </CommentIcon>
                
            </LikesIcons>
            <LikesCount>{props.likes} likes</LikesCount>
        </LikesContainer>
            
    
    );
}

export default Likes;