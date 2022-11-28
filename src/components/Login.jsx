import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'

const Login = () => {
    const handleForm = (event) => {
        event.preventDefault();
   console.log(event.target.name.value);
   console.log(event.target.email.value);
   console.log(event.target.password.value);
   document.getElementById('name').value='';

    }
    return (
        <section className='loginContainer'>
            <div className='loginSection'>
                <div>
                    <div className='mb-7'>
                       <h1 style={{'color':'#79b158'}} className='text-center text-3xl font-bold  '>Active Chat</h1>
            <h3 className='text-center'>Login</h3>   
                    </div>
                   

            <form onSubmit={handleForm} className='loginForm' action="">
                <input className='formInput' type="email" name='email' placeholder='email' />
                <input className='formInput mt-4' type="password" name='password' placeholder='password' />
     
                <button className='mt-3'>Submit</button>
            </form>
            <p className='text-center loginText '>Create a new account? <Link to={'/register'}><span   className='underline'>Register</span></Link>  </p>
                </div>
           

        </div> 
        </section>
       
    );
};

export default Login;