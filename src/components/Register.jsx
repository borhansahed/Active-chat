import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BsImage } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Register.css'
import auth from '../firebase-init';


const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
       setPassword(event.target.value);
     
    }
    const handleForm  = async (event) => {
        event.preventDefault();
   try {
       
       const res = await createUserWithEmailAndPassword(auth, email, password)
     const user = res.user;
        console.log(user);
        toast.success("Register Successfully")
        setTimeout(() => {
            navigate('/login')
          }, 2000);
  } catch (error) {
    console.log(error);
    setError(error.message);
      toast.error("sorry try again")
  }



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
                <input onBlur={handleEmail} className='registerFormInput' type="email" name='email' placeholder='email' />
                <input onBlur={handlePassword} className='registerFormInput' type="password" name='password' placeholder='password' />
                {error && <p className='text-red-600'>{error}</p>}
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