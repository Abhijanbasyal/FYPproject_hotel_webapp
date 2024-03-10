import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Avatar from '../../assets/profileavatar.jpg';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {usernameValidate} from '../../Helper/validate';
import {useAuthStore} from '../../store/store';

const Username = () => {

  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername)


  

  const formik = useFormik({
    initialValues : {
      username : 'example123'
    },
    validate : usernameValidate,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit : async values => {
      
      setUsername(values.username)
      navigate('/password')
    }
  })

  return (
    <div className='flex w-full bg-red-600 justify-center items-center  text-black h-screen relative'>
      <Toaster position='bottom-center' reverseOrder={false}></Toaster>
      <div>
        <div>
          Welcome again
        </div>
        <div>
          a bit description
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className='h-10 w-10'>
              <img src={Avatar} alt='avatar' />
            </div> 
            <div>
              <input {...formik.getFieldProps('username')} type='text' placeholder='userna,e' />
            </div>
            <div>
              <button type='submit'>lets go </button>
            </div>
          </form>
          <div>memebr no then click <Link to='/register'>register?</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Username
