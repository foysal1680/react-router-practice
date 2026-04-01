import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';
const Users = () => {

    const user=useLoaderData()
    console.log(user)
    return (
        <div>
            <h2>Users</h2>
            <div>
                {
                    user.map(data=> <User data={data}></User>)
                }
            </div>
        </div>
    );
};

export default Users;