import styled from 'styled-components';

export const PostList = styled.section`
    min-height: calc(100vh - 120px);
    padding: 10px;
`;

export const PostsItem = styled.div`
    +div {
        margin-top: 15px;
    }
`;

export const PostsInfo = styled.div`
    font-size: 12px;
    span {
        color: #696969;
    }
`;