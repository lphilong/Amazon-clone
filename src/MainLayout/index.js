import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import NavBar from '../NavBar/Nav';

function MainLayout() {
    return (
        <div>
            <NavBar />
            <HomePage />
        </div>
    );
}

export default MainLayout;
