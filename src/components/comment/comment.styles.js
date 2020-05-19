import styled from 'styled-components';

export const CommentContainer = styled.div`
    +div {
        margin-top: 20px;
    }
    max-width: 700px;
`;

export const CommentInfo = styled.div`
    font-size: 11px;
    span {
        color: #696969;
    }
`;

export const CommentBody = styled.p`
    font-size: 14px;
    line-height: 1;
    margin: 3px 0;
`;