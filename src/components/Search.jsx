import React from 'react';
import '../css/Sidebar.css'

const Search = () => {
    return (
        <div  >
            <form className='sidebarForm' action="">
                <input type="text" name='name' placeholder='Find a user' />
            </form>
        </div>
    );
};

export default Search;