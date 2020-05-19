import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Comment from '../comment/comment';

import {
    PostCommentsContainer,
    PostDetail,
    PostDetailTitle,
    PostsInfo,
    CommentsContainer
} from './posts.styles';

const Post = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [postItem, setPostItem] = useState({});
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        // effect
        // let isMounted = false;
        const fetchItem = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
                setPostItem(res.data);
                setLoading(false);
            } catch(err) {
                console.error(err)
            }
        }
        const fetchItemComments = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`);
                setComments(res.data);
                setLoading(false);
            } catch(err) {
                console.error(err)
            }
        }
        fetchItem();
        fetchItemComments();
        return () => {
            // cleanup
            // isMounted = true;
        }
    }, [match.params.id])

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <Fragment>
            {/* <Nav /> */}
            <PostCommentsContainer>
                <PostDetail>
                    {
                        postItem && (
                                <Fragment>
                                    <PostDetailTitle>&#8227; {postItem.title}</PostDetailTitle>
                                    <PostsInfo>
                                        <span>Id: <span>{postItem.id}</span></span>{' - '}
                                        <span>UserId: <span>{postItem.userId}</span></span>
                                    </PostsInfo>
                                </Fragment>
                        )
                    }
                </PostDetail>
                <CommentsContainer>
                    <h2>Top Comments:</h2>
                    {
                        comments && comments.map(comment =>  <Comment key={comment.id} comment={comment} />)
                    }
                </CommentsContainer>
            </PostCommentsContainer>
        </Fragment>
    )
}

export default Post;
