import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Shared/Footer/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayouts;