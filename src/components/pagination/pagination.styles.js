import styled from 'styled-components';

export const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    background-color: #f6f6ef;
    padding: 8px 0;
    flex-wrap: wrap;
    margin-top: 0;
    padding-bottom: 20px;
`;

export const PaginationItem = styled.li`
    cursor: pointer;
    &.active {
        a {
            color: #ff742b;
            border: 1px solid #ff742b;
        }
    }
`;

export const PaginationLink = styled.a`
    padding: 5px 10px;
    min-width: 30px;
    height: 24px;
    font-size: 14px;
    margin: 0 2px;
    color: #9d9d9d;
    border: 1px solid #9d9d9d;
    text-align: center;
    border-radius: 2px;
    font-weight: 400;
    background-color: transparent;
`;