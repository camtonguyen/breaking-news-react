import React from 'react';
import { Link } from 'react-router-dom';

import { PostList, PostsItem, PostsInfo } from './posts.styles';

const Posts = ({ posts, loading, searchTerm }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const filterPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <PostList>
          { filterPosts.map(({ title, id, userId }) => (
                <PostsItem key={id}>
                    <Link to={`/posts/${id}`}>{title}</Link>
                    <PostsInfo>
                      <span>Id: <span>{id}</span></span>{' - '}
                      <span>UserId: <span>{userId}</span></span>
                    </PostsInfo>
                </PostsItem>
            ))
          }
      </PostList>
  );
};

export default Posts;
