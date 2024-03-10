import React, { useEffect } from 'react'
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {resetPasswordValidation} from '../../Helper/validate';
import {resetPassword} from '../../Helper/helper.js'
import { useAuthStore } from '../../store/store.js';
import { useNavigate, Navigate } from 'react-router-dom';
import useFetch from '../../hooks/fetchHook.js'

const Reset = () => {

  const {username} = useAuthStore(state => state.auth)
  const navigate = useNavigate()
  const [{isLoading, apiData, status, serverError}] = useFetch('createResetSession')


  const formik = useFormik({
    initialValues : {
      password : '',
      confirm_pwd: ''
    },
    validate : resetPasswordValidation,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit : async values => {
      let resetPromise = resetPassword({username, password : values.password})

      toast.promise(resetPromise, {
        loading : "updating",
        success : <div> reset successfully</div>,
        error: <div>Could not reset</div>
      })

      resetPromise.then(function(){navigate('/password')})
    }
  })

  if(isLoading) return <div>isLoading</div>
  if(serverError) return <div>{serverError.message}</div>
  if(status && status !== 201) return <Navigate to={'/password'} replace={true}></Navigate>

  return (
    <div className='flex w-full bg-red-600 justify-center items-center  text-black h-screen relative'>
      <Toaster position='bottom-center' reverseOrder={false}></Toaster>
      <div>
        <div>
          Reset
        </div>
        <div>
          Enter new password
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input {...formik.getFieldProps('password')} type='text' placeholder='New password' />
            </div>
            <div>
              <input {...formik.getFieldProps('confirm_pwd')} type='text' placeholder='Repeat password' />
            </div>
            <div>
              <button type='submit'>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset
