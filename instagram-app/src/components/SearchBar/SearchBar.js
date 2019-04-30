import React from 'react';
import logo from '../../assets/iglogo.png';

import './searchbar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="logo-imgs">
                <i className="fab fa-instagram"></i> 
                
                <img className="ig-logo" src={logo}/>                
            </div>
            <div>
                <input type="text" placeholder="&#x1F50D; Search..."/>
            </div>
            <div className="social-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user-circle"></i>
            </div>
            
        </div>
    );
}

export default SearchBar;