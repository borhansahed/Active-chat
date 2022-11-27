import React from 'react';
import { SlOptions } from 'react-icons/sl';
import { FiVideo } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import '../css/Chats.css'

const ChatsHeader = () => {
    return (
        <div className='chatsHeader'>
            <div className='chatInfo'>
                <span>Mohammad Sahed</span>
            
          <div className='chatIcons'>
             <h5><BsTelephone/></h5> 
             <h5><FiVideo/></h5> 
                
                  
           <h5><SlOptions/></h5>
          </div>
                
                   
            
           </div>
        
        </div>
    );
};

export default ChatsHeader;