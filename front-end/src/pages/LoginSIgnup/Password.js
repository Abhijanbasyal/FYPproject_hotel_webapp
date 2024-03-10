import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Avatar from '../../assets/profileavatar.jpg';
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {passwordValidate} from '../../Helper/validate';
import useFetch from '../../hooks/fetchHook';
import {useAuthStore} from '../../store/store';
import {verifyPassword} from '../../Helper/helper'

const Password = () => {

  const navigate = useNavigate();
  const {username} = useAuthStore(state => state.auth)
  const [{ isLoading, apiData, serverError}] = useFetch(`/user/${username}`)

  const formik = useFormik({
    initialValues : {
      password : ''
    },
    validate : passwordValidate,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit : async values => {
      let loginPromise = verifyPassword({username, password: values.password})
      toast.promise(loginPromise, {
        loading: "checking",
        success: <div>login successfully</div>,
        error: <div>password not match</div>
      })

      loginPromise.then(res => {
        let {token} = res.data;
        localStorage.setItem('token', token)
        navigate('/profile')
      })
    }
  })

  if(isLoading) return <div>isLoading</div>
  if(serverError) return <div>{serverError.message}</div>

  return (
    <div className='flex w-full bg-red-600 justify-center items-center  text-black h-screen relative'>
      <Toaster position='bottom-center' reverseOrder={false}></Toaster>
      <div>
        <div>
          Welcome {apiData?.firstName || apiData?.username}
        </div>
        <div>
          a bit description
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className='h-10 w-10'>
              <img src={apiData?.profile || Avatar} alt='avatar' />
            </div> 
            <div>
              <input {...formik.getFieldProps('password')} type='text' placeholder='password' />
            </div>
            <div>
              <button type='submit'>sign in</button>
            </div>
          </form>
          <div>memebr no then click <Link to="/recovery">forgot password?</Link>  </div>
        </div>
      </div>
    </div>
  )
}

export default Password
