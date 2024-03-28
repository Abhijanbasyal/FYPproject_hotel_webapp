import React, {useState, useContext} from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/context/AuthContext';
import axios from "axios";


const Login = () => {



    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    
      const { loading, error, dispatch } = useContext(AuthContext);
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      // const handleClick = async (e) => {
      //   e.preventDefault();
      //   dispatch({ type: "LOGIN_START" });
      //   try {
      //     const res = await axios.post("/auth/login", credentials);
    
      //     if (res.data.isAdmin === true) {
      //       throw new TypeError("Error message goes here");
      //     }
    
      //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      //     navigate("/")
      //   } catch (err) {
      //     if (err instanceof TypeError) {
      //       const errData = {
      //         "success": false,
      //         "status": 404,
      //         "message": "Admin data entered!",
      //         "stack": "idk what to write"
      //       }
      //       dispatch({ type: "LOGIN_FAILURE", payload: errData });
      //     }
      //     else {
      //       console.log(err.response.data);
      //       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    
      //     }
      //   }
      // };
    
      const handleClick = async (e) => {
        e.preventDefault();
        //dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("http://localhost:8000/api/auth/login", credentials);
    
          // if (res.data.isAdmin === true) {
          //   throw new TypeError("Error message goes here");
          // }
    
          //dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          
          navigate("/")
        } catch (err) {
          //dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
          console.log(err);
        }
      };

  return (
    <div className='relative h-screen w-screen bg-black/80 flex justify-center items-center pt-20 mini:p-0 overflow-hidden'  > 
        <div className='flex  flex-col bg-[#121212]  p-4 rounded-3xl shadow-lg shadow-gray-300'>
            {/* <div className='flex justify-end'>
                x
            </div> */}
            <div className='text-[#87888f] uppercase font-bold text-center p-4 text-4xl'>
                Login
            </div>

            <div className='p-4'>
                {/* <span className='text-[#505050] '>Username</span> */}
                <input type='text'  className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full'  placeholder='username' id='username' onChange={handleChange}/>
               
            </div>
            <div className='p-4'>
                {/* <span className='text-[#505050] '>password</span> */}
                <input type='text'  className='bg-[#1c1c1c] p-3 rounded border-white/20 border-2 w-full' placeholder='password' id='password' onChange={handleChange}/>
               
            </div>
            <div className='flex justify-center items-center pt-4'>

                <button className='bg-[#09ff5c] px-12 py-4 rounded-3xl transform  hover:scale-125 duration-700  ease-in-out hover:shadow-lg hover:shadow-slate-400' disabled={loading} onClick={handleClick} >
                    <b className='text-[#095216]'>login</b>
                </button>
                {error && <span>{error.message}</span>}
            </div>
            <div className='text-[#4d4d4d] pt-4 text-center'> 
                Don't have any account ? <Link to='/signup' className='text-orange-400'>Sign UP</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Login
