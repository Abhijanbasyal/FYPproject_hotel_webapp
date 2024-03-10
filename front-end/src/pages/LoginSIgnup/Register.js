import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Avatar from '../../assets/profileavatar.jpg';
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {registerValidation} from '../../Helper/validate';
import convertToBase64 from '../../Helper/convert';
import {registerUser} from '../../Helper/helper';

const Register = () => {

  const navigate = useNavigate()
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues : {
      email: '',
      username: '',
      password: ''
    },
    validate : registerValidation,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, {profile : file || ''}) 
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
        loading : "creating",
        success : <div>register successfully</div>,
        error : <div>Couldnot register</div>
      });
      registerPromise.then(function(){navigate('/username')})
    }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);  
  }

  return (
    <div className='flex w-full bg-red-600 justify-center items-center  text-black h-screen relative'>
      <Toaster position='bottom-center' reverseOrder={false}></Toaster>
      <div>
        <div>
          Register
        </div>
        <div>
          Happy to join you
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className='h-10 w-10'>
              <label htmlFor='profile'>
                <img src={file || Avatar} alt='avatar' />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
              
            </div> 
            {/* <br />Temporary br */}<br />
            <div>
              <input {...formik.getFieldProps('email')} type='text' placeholder='Email*' />
              <input {...formik.getFieldProps('username')} type='text' placeholder='Username*' />
              <input {...formik.getFieldProps('password')} type='text' placeholder='Password*' />
            </div>
            <div>
              <button type='submit'>Register </button>
            </div>
          </form>
          <div>Already register<Link to='/username'>login now?</Link> </div>
        </div>
      </div>
    </div>
  )
}

export default Register
