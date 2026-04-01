import React from 'react';
import { Link,useNavigate } from 'react-router';

const Post = ({ data }) => {

    const userStyle={
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'20px',
        margin:'20px'
    }

  const navigate=useNavigate();
   const handleNavigate=()=>{
    navigate('/')
    
   }


    return (
        <div style={userStyle}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <Link to={`/posts/${data.id}`}>Show Details</Link>
            <button onClick={handleNavigate}>Details of:{data.id}</button>
        </div>
        
        
    );
};

export default Post;