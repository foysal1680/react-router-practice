import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const post = useLoaderData()
    return (
        <div>
            <h2>This is my posts page</h2>
            <p>length: {post.length}</p>
            {
                post.map(data => <Post data={data}></Post>)
            }
        </div>
    );
};

export default Posts;