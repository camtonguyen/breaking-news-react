import React from 'react';

import { 
    NavContainer,
    NavLogoContainer,
    NavLogoImage,
    NavLogoText,
    NavLoginLogout
} from './nav.styles';

import logoNav from '../../assets/y18.gif';

const Nav = () => {
    return (
        <NavContainer>
            <NavLogoContainer to={'/'}>
                <NavLogoImage src={logoNav} alt='y18-logo'/>
                <NavLogoText>Breaking News</NavLogoText>
            </NavLogoContainer>
           < NavLoginLogout>Login</NavLoginLogout>
        </NavContainer>
    )
}

export default Nav;