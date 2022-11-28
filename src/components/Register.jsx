import React from 'react';
import { BsImage } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../css/Register.css'

const Register = () => {
    const handleForm = (event) => {
        event.preventDefault();
   console.log(event.target.name.value);
   console.log(event.target.email.value);
   console.log(event.target.password.value);
   document.getElementById('name').value='';

    }
    return (
        <section className='registerContainer'>
            <div className='registerSection'>
                <div>
                    <div className='mb-7'>
                       <h1 style={{'color':'#79b158'}} className='text-center text-3xl font-bold  '>Active Chat</h1>
            <h3 className='text-center'>Register</h3>   
                    </div>
                   

            <form onSubmit={handleForm} className='registerForm' action="">
                <input id='name' className='formInput' type="text"  name='name' placeholder='display name' />
                <input className='registerFormInput' type="email" name='email' placeholder='email' />
                <input className='registerFormInput' type="password" name='password' placeholder='password' />
                <input style={{'display' : 'none', 'padding': '0'}} className='registerFormInput' type="file" id='file'/>
               
                   <label className='flex  item-center gap-x-2 text-gray-300'  htmlFor="file">
                 <h3 style={{'color' : '#79b158'}}><BsImage/></h3>
                 <p className='pt-1'>Add an Avatar</p>
                </label>  
               
               
                <button>Submit</button>
            </form>
            <p className='text-center RegisterText '>Do you have an account? <Link to={'/login'}><span className='underline'>login</span></Link>  </p>
                </div>
           

        </div> 
        </section>
       
    );
};

export default Register;