import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
    height: 30px;
    display: flex;
    align-items: center;
    background: #ff742b;
    padding: 2px 10px;
    justify-content: space-between;
`;

export const NavLogoContainer = styled(Link)`
    max-width: 180px;
    display: flex;
    align-items: center;
`;

export const NavLogoImage = styled.img`
    width: 20px;
    height: 20px;
    border: 1px solid white;
    margin-right: 10px;
`;

export const NavLogoText = styled.h3`
    font-size: 18px;
    line-height: 1;
`;

export const NavLoginLogout = styled.div`
    cursor: pointer;
`;