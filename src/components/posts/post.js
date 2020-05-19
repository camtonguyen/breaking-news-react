import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Nav from '../nav/nav';

const Post = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [postItem, setPostItem] = useState({});
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        // effect
        const fetchItem = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
            setPostItem(res.data);
            setLoading(false);
        }
        const fetchItemComments = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`);
            setComments(res.data);
            setLoading(false);
        }
        fetchItem();
        fetchItemComments();
        return () => {
            // cleanup
        }
    }, [match.params.id])

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <Fragment>
            <Nav />
            <div>
                {
                    postItem && (
                        <div>
                            <h2>{postItem.title}</h2>
                            <p>{postItem.body}</p>
                        </div>
                    )
                }
            </div>
            <div>
                {
                    comments && comments.map(comment =>  <p key={comment.id}>{comment.name}</p>)
                }
            </div>
        </Fragment>
    )
}

export default Post;
