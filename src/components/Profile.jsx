import {signOut } from "firebase/auth";
import React from 'react';
import toast from "react-hot-toast";
import '../css/Sidebar.css'
import auth from '../firebase-init'

import {   useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    
    const handleSignOut = () => {

        signOut(auth).then(() => {
           toast.success("Logout Successfully")
           setTimeout(() => {
            navigate('/login');
           }, 1000);
        }).catch((error) => {
            toast.error("Logout failed")
});
  // An error happened.
}

    return (

        
        <div className='profileContainer'>
            <img  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <h2 className='text-white'>Mohammad Sahed</h2>
            <button onClick={handleSignOut} >Logout</button>
            
        </div>
    );
};

export default Profile;