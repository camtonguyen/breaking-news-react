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

export const PostCommentsContainer = styled.section`
    min-height: calc(100vh - 120px);
    padding: 10px;
`;

export const PostDetail = styled.div`
    margin-bottom: 30px;
    margin-left: 20px;
    div {
        margin-left: 18px;
    }
`;

export const PostDetailTitle = styled.h3`
    margin: 0 0 5px;
`;

export const CommentsContainer = styled.div`
    margin-left: 20px;
`;