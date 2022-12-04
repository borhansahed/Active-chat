import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from '../firebase-init'
import '../css/Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
       setPassword(event.target.value);
     
    }
    const handleForm = (event) => {
        event.preventDefault();
  
  
   
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setTimeout(() => {
        navigate('/')
      }, 2000);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
    console.log(error, errorCode);

  });

   

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
                <input onBlur={handleEmail} className='formInput' type="email" name='email' placeholder='email' />
                <input onBlur={handlePassword} className='formInput mt-4' type="password" name='password' placeholder='password' />
                {error && <p className='text-red-600'>{error}</p>}
     
                <button className='mt-3'>Submit</button>
            </form>
            <p className='text-center loginText '>Create a new account? <Link to={'/register'}><span   className='underline'>Register</span></Link>  </p>
                </div>
           

        </div> 
        </section>
       
    );
};

export default Login;