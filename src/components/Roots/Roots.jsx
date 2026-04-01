import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Hader';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
