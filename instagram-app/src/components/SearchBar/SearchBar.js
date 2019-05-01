import React from 'react';
import logo from '../../assets/iglogo.png';

import './searchbar.css';

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
            <button onClick={onLogOut}>Log Out</button>
            
        </div>
    );
}


const onLogOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
};

export default SearchBar;