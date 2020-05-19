import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './search';

export const HeaderContainer = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    background: #ff742b;
    padding: 4px;
    justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
    flex: 1 0 180px;
    max-width: 180px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex: 1 0 40px;
        max-width: 56px;
    }
`;

export const LogoImage = styled.img`
    width: 48px;
    margin-right: 8px;
`;

export const LogoText = styled.div`
    font-size: 18px;
    line-height: 1;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SearchContainer = styled(Search)`
    display: inline-block;
    width: calc(100% - 324px);
    margin-right: 16px;
`;

export const FormField = styled.form`
    width: 100%;
`;

export const FormInput = styled.input`
    border-radius: 0;
    border: none;
    height: 42px;
    width: calc(100% - 10px);
    box-shadow: none;
    padding: 16px 30px;
    font-weight: 300;
    background-color: #fff;
    color: rgba(0,0,0,.75);
`;