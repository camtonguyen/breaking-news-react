import React from 'react';
import { Link } from "react-router-dom";

import Search from './search';
import logo from '../../assets/logo.png';

const Header = ({ searchTerm, handleChange }) => {
    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt={logo} />
            </Link>
            <Search searchTerm={searchTerm} handleChange={handleChange} />
        </header>
    )
}

export default Header;
