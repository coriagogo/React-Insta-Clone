import React from 'react';
import logo from '../../assets/iglogo.png';
import camera from '../../assets/camera-logo.svg';

const SearchBar = () => {
    return (
        <div classname="search-bar-container">
            <div className="logo-imgs">
                <img src={logo}/>
                <img src={camera}/>
            </div>
            <div>
                <input type="text" placeholder="Search..." />
            </div>
            <div className="social-icons">
                
            </div>
            
        </div>
    );
}

export default SearchBar;