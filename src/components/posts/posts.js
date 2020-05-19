import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';



const Posts = ({ posts, loading, searchTerm }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const filterPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
        <ul className='list-group'>
            { filterPosts.map(({ title, id }) => (
                  <li key={id}>
                      <Link to={`/posts/${id}`}>{title}</Link>
                  </li>
            ))
            }
        </ul>
        <hr />
        
    </Fragment>
  );
};

export default Posts;
