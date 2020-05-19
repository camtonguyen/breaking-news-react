import React from 'react';

import { 
    HeaderContainer,
    LogoContainer,
    LogoImage,
    LogoText,
    SearchContainer
} from './header.styles';

import logo from '../../assets/logo.png';

const Header = ({ searchTerm, handleChange }) => {
    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <LogoImage src={logo} alt='logo'/>
                <LogoText>
                    Search <br /> Breaking News
                </LogoText>
            </LogoContainer>
            <SearchContainer searchTerm={searchTerm} handleChange={handleChange} />
        </HeaderContainer>
    )
}

export default Header;
