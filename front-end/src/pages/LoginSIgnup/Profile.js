import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Avatar from '../../assets/profileavatar.jpg';
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {profileValidation} from '../../Helper/validate';
import convertToBase64 from '../../Helper/convert';
import useFetch from '../../hooks/fetchHook';
import { updateUser } from '../../Helper/helper';

const Profile = () => {

  const [file, setFile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues : {
      firstName: apiData?.firstName || '',
      lastName: apiData?.lastName || '',
      email: apiData?.email ||  '',
      mobile: apiData?.mobile || '',
      address: apiData?.address || ''
    },
    enableReinitialize: true,
    validate : profileValidation  ,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, {profile : file || apiData?.profile || ''}) 
      let updatePromise = updateUser(values)
      toast.promise(updatePromise, {
        loading: "updating",
        success: <div>update successfully</div>,
        error: <div>could not be updated</div>
      })
      
    }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);  
  }

  //logout
  function userLogout(){
    localStorage.removeItem('token');
    navigate('/')

  }

  if(isLoading) return <div>isLoading</div>
  if(serverError) return <div>{serverError.message}</div>

  return (
    <div className='flex w-full bg-red-600 justify-center items-center  text-black h-screen relative'>
      <Toaster position='bottom-center' reverseOrder={false}></Toaster>
      <div>
        <div>
          Profile
        </div>
        <div>
          YOu can update the details
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className='h-10 w-10'>
              <label htmlFor='profile'>
                <img src={apiData?.profile || file || Avatar} alt='avatar' />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
              
            </div> 
            {/* <br />Temporary br */}<br />
            <div>
              <div>
                <input {...formik.getFieldProps('firstName')} type='text' placeholder='FirstName' />
                <input {...formik.getFieldProps('lastName')} type='text' placeholder='LastName' />
              </div>
              <div>
                <input {...formik.getFieldProps('mobile')} type='text' placeholder='mobile no.' />
                <input {...formik.getFieldProps('email')} type='text' placeholder='Email*' />
              </div>
              <div>
                <input {...formik.getFieldProps('address')} type='text' placeholder='Address' />
              </div>
            </div>
            <div>
              <button type='submit'>update </button>
            </div>
          </form>
          <div>Comeback later <button onClick={userLogout}>logout?</button>  </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
