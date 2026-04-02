import React, { Suspense } from 'react';
import { Link } from 'react-router';

const User = ({data}) => {
    const {id,name,email,phone}=data

    const userStyle={
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'20px',
        margin:'20px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
         
        </div>
    );
};

export default User;