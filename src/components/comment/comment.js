import React from 'react';

import {
  CommentContainer,
  CommentInfo,
  CommentBody
} from './comment.styles';

const Comment = ({ comment }) => (
  <CommentContainer>
    <CommentInfo>
      <span>{comment.name} - [Email: {comment.email}]</span>
    </CommentInfo>
    <CommentBody>&#8227; {comment.body}</CommentBody>
  </CommentContainer>
);

export default Comment;
