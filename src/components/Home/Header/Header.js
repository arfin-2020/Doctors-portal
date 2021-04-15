import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Businessinfo from '../Businessinfo/Businessinfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <div className = "header-container">
            <Navbar/>
            <HeaderMain/>
            <Businessinfo/>
        </div>
    );
};

export default Header;