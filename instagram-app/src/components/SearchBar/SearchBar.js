import React from 'react';
import logo from '../../assets/iglogo.png';

import styled from 'styled-components';



const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
        max-width: 90%;
        margin: 0 auto;        
    }
`

const LogoHeader = styled.div`
    display:flex;
    flex-direction: row;
    align-content: center;    

    i {
        
        padding-right: 15px;
        font-size: 30px;

        @media (max-width: 500px) {
            font-size: 18px;
            padding-right: 10px;
        }
    }

    .ig-logo {
        
        height: 30px;
        border-left: 1px solid black;
        padding-left: 10px;

        @media (max-width: 500px) {
            height: 25px;
            
        }
    }

    @media (max-width: 500px) {
        margin-left: 10px;
    }
`

const Search = styled.div`

    input {
        text-align: center;
        width: 200px;
        height: 25px;
        margin: 20px 50px;
        display: flex;
        justify-content: center;
        border-radius: 3px;
        border: 1px solid lightgrey;

        @media (max-width: 500px) {
            width: 150px; 
            font-size: 12px;
            margin: 20px;
        }
    }
`

const SocialIcons = styled.div`
    display: flex;

    .icons {
        margin-top: 8px;

        i {
        font-size: 30px;    
        margin: 0 5px;

            @media (max-width: 500px) {
                font-size: 15px;     
                          
            }
        }

        @media (max-width: 500px) {
            margin-top: 2px;
        }
    }    

    @media (max-width: 500px) {        
        margin-top: 0;
    }
`

const LogOut = styled.button`
    
    cursor: pointer;
    font-size: 30px;
    border: none;

    &:hover {
        
        color: #ff6f61;
    }

    @media (max-width: 500px) {
        font-size: 18px;       
    }
`

const SearchBar = props => {
    

    return (
        
        <Header>        
            <LogoHeader>
                <i className="fab fa-instagram"></i>                
                <img className="ig-logo" src={logo}/>                
            </LogoHeader>
            <Search>
                <input type="text" placeholder="&#x1F50D; Search..." onKeyDown={props.searchPosts} />
            </Search>            
            <SocialIcons>
                <div className="icons">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user-circle"></i>         
                </div> 
                <LogOut onClick={onLogOut}><i class="fas fa-sign-out-alt" /></LogOut>
            </SocialIcons>            
        </Header>
    );
}


const onLogOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
};



export default SearchBar;