import React from 'react';
import logo from '../../assets/iglogo.png';

import styled from 'styled-components';

import './searchbar.css';

const LogOut = styled.button`
    margin-top: 17px;
    width: 35px;
    height: 35px;
    color: #ff6f61;
    background-color: #ff6f6166;
    border: 1px solid #ff6f61;
    border-radius: 50%; 

    &:hover {
        background-color: #ff6f61;
        color: white;
    }
`

const SearchBar = props => {
    

    return (
        
    
        <div className="search-container">
            <div className="logo-imgs">
                <i className="fab fa-instagram"></i> 
                
                <img className="ig-logo" src={logo}/>                
            </div>
            <div>
                <input type="text" placeholder="&#x1F50D; Search..." onKeyDown={props.searchPosts} />
            </div>
            <div className="social-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user-circle"></i>
            </div>
            <LogOut onClick={onLogOut}>Log Out
            
            </LogOut>
            
        </div>
    );
}


const onLogOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
};



export default SearchBar;