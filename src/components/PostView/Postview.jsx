import React from 'react';
import { useLoaderData } from 'react-router';

const Postview = () => {
    const post=useLoaderData()
    const{id,title,body}=post
    
    return (
        <div>
            <h1>Post Details</h1>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Postview;