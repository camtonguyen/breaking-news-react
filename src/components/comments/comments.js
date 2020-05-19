import React from 'react';
import Comment from './comment';

const Comments = ({ comments, searchTerm }) => {
    return comments.map(comm => {
        if (
            (comm.text || "")
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1 &&
            searchTerm.length
          ) {
            return (
              <Comment
                key={comm.id}
                text={<mark>{comm.text}</mark>}
                user={comm.user}
                date={comm.date}
              />
            );
          }
          if (!searchTerm.length) {
            return (
              <Comment
                key={comm.id}
                text={comm.text}
                user={comm.user}
                date={comm.date}
              />
            );
          }
          return null;
    });
}

export default Comments;
