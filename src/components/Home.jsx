import React from 'react';
import '../css/Home.css'
import Chats from './Chats';
import SideBar from './SideBar';

const Home = () => {
    return (
        <div className='home shadow-2xl'>
            <div className='homeContainer'>

            <div className='sidebar'>
               <SideBar/>  
            </div>
            <div className='chat'>
              <Chats/> 
   
            </div>
         </div>
        
        </div>
    );
};

export default Home;