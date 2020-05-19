import React, { useState, useEffect, Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Posts from './components/posts/posts';
import Pagination from './components/pagination/pagination';
import Post from './components/posts/post';
import Header from './components/header/header';

import { GlobalStyle } from './global.styles';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header searchTerm={searchTerm} handleChange={handleChange} />
            <Posts posts={currentPosts} searchTerm={searchTerm} loading={loading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Route>
          <Route path={'/posts/:id'} component={Post}/>
        </Switch>
      </Router>
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
