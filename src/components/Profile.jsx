import React from 'react';
import '../css/Sidebar.css'

const Profile = () => {
    return (
        <div className='profileContainer'>
            <img  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <h2 className='text-white'>Mohammad Sahed</h2>
            <button >Logout</button>
            
        </div>
    );
};

export default Profile;