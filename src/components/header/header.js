import React, { useState, useEffect } from 'react';

import { 
    HeaderContainer,
    LogoContainer,
    LogoImage,
    LogoText,
    SearchContainer,
    LoginLogout
} from './header.styles';

import logo from '../../assets/logo.png';

import { signInWithGoogle, auth } from '../../firebase.utils';

const Header = ({ searchTerm, handleChange }) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        // effect
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            // console.log(user)
        })
        return () => {
            // cleanup
            unsubscribeFromAuth();
        }
    }, []);
    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <LogoImage src={logo} alt='logo'/>
                <LogoText>
                    Search <br /> Breaking News
                </LogoText>
            </LogoContainer>
            <SearchContainer searchTerm={searchTerm} handleChange={handleChange} />

            <LoginLogout >
                {
                    currentUser ? <span onClick={() => auth.signOut()}>Logout</span> : <span onClick={signInWithGoogle}>Login</span>
                }
            </LoginLogout>
        </HeaderContainer>
    )
}

export default Header;
