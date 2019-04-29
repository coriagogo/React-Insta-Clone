import React from 'react';
import logo from '../../assets/iglogo.png';

import './searchbar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="logo-imgs">
                <i className="fab fa-instagram"></i> 
                <span className="divider"> | </span>
                <img className="iglogo" src={logo}/>
                
            </div>
            <div>
                <input type="text" placeholder="&#x1F50D; Search..." />
            </div>
            <div className="social-icons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user-circle"></i>
            </div>
            
        </div>
    );
}

export default SearchBar;