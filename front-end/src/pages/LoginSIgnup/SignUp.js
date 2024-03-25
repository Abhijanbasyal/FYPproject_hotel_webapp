import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    city: '',
    country: '',
    img: '',

  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", credentials);
      console.log(res);
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className='relative h-screen w-screen bg-black/80 flex justify-center items-center pt-20 mini:p-0 overflow-hidden'> 
      <div className='flex flex-col bg-[#121212] p-4 rounded-3xl shadow-lg shadow-gray-300'>
        <div className='text-[#87888f] uppercase font-bold text-center p-4 text-4xl'>
          SignUP
        </div>
        {/* firstname and last name */}
        <div className='flex'>
          <div className='p-4'>
            <input type='text' id='firstName' value={credentials.firstName} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='First Name'/>
          </div>
          <div className='p-4'>
            <input type='text' id='lastName' value={credentials.lastName} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='Last Name'/>
          </div>
        </div>
        {/* email and phone */}
        <div className='flex'>
          <div className='p-4'>
            <input type='text' id='email' value={credentials.email} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='Email'/>
          </div>
          <div className='p-4'>
            <input type='text' id='phone' value={credentials.phone} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='Phone NO.'/>
          </div>
        </div>
        {/* country anad city */}
        <div className='flex'>
          <div className='p-4'>
            <input type='text' id='country' value={credentials.country} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='country'/>
          </div>
          <div className='p-4'>
            <input type='text' id='city' value={credentials.city} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='city'/>
          </div>
        </div>
        <div className='p-4'>
          <input type='text' id='username' value={credentials.username} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='Username'/>
        </div>
        <div className='p-4'>
          <input type='password' id='password' value={credentials.password} onChange={handleChange} className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='Password'/>
        </div>
        <div className='flex justify-center items-center pt-4'>
          <button onClick={handleClick} className='bg-[#09ff5c] px-12 py-4 rounded-3xl transform hover:scale-125 duration-700 ease-in-out hover:shadow-lg hover:shadow-slate-400'>
            <b className='text-[#095216]'>SignUp</b>
          </button>
        </div>
        <div className='text-[#4d4d4d] pt-2 text-center'> 
          Have an account? <Link to='/login' className='text-orange-400'>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
