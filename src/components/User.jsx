import React from 'react';
import '../css/Sidebar.css'

const User = () => {
    return (
        <div className='userContainer'>
            <div>
                <img src="https://assets.leetcode.com/users/avatars/avatar_1656520721.png" alt="" />
            </div>
            <div>
                 <h1 className='text-gray-300'>Mohammad Sahed</h1>
            <h4 className='text-gray-300 '>good bye</h4>
            </div>
           
        </div>
    );
};

export default User;