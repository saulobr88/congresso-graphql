import React from 'react';
import logo from '../img/cn.png';
import '../styles/App.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;