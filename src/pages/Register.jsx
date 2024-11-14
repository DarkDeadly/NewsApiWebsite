import React, { useState } from 'react'
import "./register.css"
import Inputs from '../components/Inputs'
import Buttons from '../components/Buttons'
import {useNavigate} from 'react-router-dom'
import validation from '../utils/validation'
const Register = () => {
  const [FormDatas  , setFormDatas] = useState({
    username : "",
    email : "",
    password : "",
    confirmpassword : ""
  })
  const [errorsForm , setErrorsForms] = useState({})
  const navigate = useNavigate()
  const handleChanges = (e) => {
    const {value , name } = e.target
    setFormDatas((prevForm) => ({
      ...prevForm ,[name]:value
    }))
  }
  const handleClicks = (e) => {
    e.preventDefault()
    setErrorsForms(validation(FormDatas))
    setFormDatas({
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    })
   
  }
  return (
    <div className="min-h-screen w-full bg-[#D6D5DD] flex justify-center items-center">
      <div className="max-h-[90%] max-w-[90%] bg-[#EDEEE8] rounded-xl flex">
        <div className="leftcontent min-h-full w-[50%] max-[827px]:hidden">
          <div className="textContent flex flex-col justify-end py-20 h-full text-center">
            <h1 className='text-white text-2xl font-sans font-bold mb-2'>Join a community of curious minds and inspiring voices.
            Your journey starts here</h1>
            <p className='text-white text-lg font-sans font-light underline underline-offset-1'>Sign up to connect and discover what is happening to the world</p>
          </div>
        </div>
        <div className="rightcontent h-full w-[50%] flex flex-col justify-center max-[827px]:w-full">
          <div className="text-center">
            <h1 className='text-black text-4xl font-serif pb-4 pt-10'>Blog Website</h1>
            <p className='text-black text-3xl font-serif pb-3'> Join the community of great Journalists</p>
            <p className=' text-lg text-gray-400 font-serif pb-3'>Register and have all the new in the palm of your hand </p>
          </div>
          <div className='text-center'>
            <Inputs 
            placeholderText='enter your username' 
            inputType='text' 
            paddingInputs='w-[80%]'
            handleChanges={handleChanges}
            errors={errorsForm.username}
            />
            <Inputs 
            placeholderText='enter your email' 
            inputType='email' 
            paddingInputs='w-[80%]'
            inputName='email'
            handleChanges={handleChanges}
            errors={errorsForm.email}
            />
            <Inputs 
            placeholderText='enter your password' 
            inputType='password' 
            paddingInputs='w-[80%]'
            inputName='password'
            handleChanges={handleChanges}
            errors={errorsForm.password}
            />
            <Inputs 
            placeholderText='confirm your password' 
            inputType='password' 
            paddingInputs='w-[80%]'
            inputName='confirmpassword'
            handleChanges={handleChanges}
            errors={errorsForm.confirmpassword}
            />
            
            <Buttons buttonText='Register'
            handlCLicks={handleClicks}
            />
            <p className='text-lg font-serif pb-10'>you  have an account what you are waiting for <span className='text-lg font-serif underline text-violet-950 cursor-pointer' onClick={() => navigate('/')}>Login</span></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
