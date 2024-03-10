import React, { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast';
import {useAuthStore} from '../../store/store.js';
import {generateOTP, verifyOTP} from '../../Helper/helper.js'
import {useNavigate} from 'react-router-dom';



const Recovery = () => {

  const {username} = useAuthStore(state => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate()


  useEffect(()=> {
    generateOTP(username).then((OTP) => {
      if(OTP) return toast.success('OTP HAS BEEN send to your email')

      return toast.error("Problem while generating OTP")
    })
  },[username])

  // verifying

  async function onSubmit(e){
    e.preventDefault();

    try{
      let {status} = await verifyOTP({username, code: OTP})
      if(status === 201){
        toast.success('Verify Successfully')
        return navigate('/reset')
      }

    }catch(error){
      return toast.error('wrong OTP !check email again')
    }

   
    
  }

  //resend
  function resendOTP(){
    let sendPromise = generateOTP(username);

    toast.promise(sendPromise, {
      loading: 'Sending',
      success: <div>OTP has been send to your email</div>,
      error: <div>couldn't send</div>
    })

    sendPromise.then(OTP => {
      //console.log(OTP)
    })
  }

  return (
    <div className='flex w-full bg-red-600 justify-center items-center  text-black h-screen relative'>
      <Toaster position='bottom-center' reverseOrder={false}></Toaster>
      <div>
        <div>
          Recovery
        </div>
        <div>
          Enter OTP to recover password
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <div>
                Enter 6 digit OTP sent to your email address
              </div>
              <div>
                <input  type='text' placeholder='OTP' onChange={(e)=> setOTP(e.target.value)} />
              </div>
              <div>
                <button type='submit'>Recover</button>
              </div>              
            </div>
          </form>          
          <div>  Can't get OTP? <button onClick={resendOTP}>resent it</button>  </div>
        </div>
      </div>
    </div>
  )
}

export default Recovery
