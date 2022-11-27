import React from 'react';
import Header from './Header';
import Profile from './Profile';
import '../css/Sidebar.css'
import Search from './Search';
import User from './User';

const SideBar = () => {
    return (
        <>
            <div>

                <div   className='sidebarContainer shadow-lg' >
                    <Header />
                    <Profile />

                </div>

                 <Search/>
                 <User/>
                 <User/>
                 <User/>
                 <User/>
                 <User/>
                 <User/>
                 <User/>
             
            </div>

        </>
    );
};

export default SideBar;