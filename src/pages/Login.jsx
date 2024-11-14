import React, { useState } from 'react'
import './login.css'
import Inputs from '../components/Inputs'
import Buttons from '../components/Buttons'
import {useNavigate} from "react-router-dom"
import validation from '../utils/validation'
const Login = () => {
    const [errors , setErrors] = useState({})
    const  [loginForm , setLoginForms] = useState({
        email : "" , 
        password : "" ,
    })
    const HandleChanges = (e) => {
        const {value , name} = e.target 
        setLoginForms((preFormData) => ({
            ...preFormData , [name] : value
        }))
    }
    const handleClicks = (e) => {
        e.preventDefault() ;
        setErrors(validation(loginForm))
       
        Navigate("/home")
    }
    const Navigate = useNavigate()
    return (
        <div className="h-screen w-full bg-[#D6D5DD] flex justify-center items-center">
            <div className="h-[90%] w-[90%] bg-[#EDEEE8] rounded-xl flex">
                <div className="w-1/2 h-full flex flex-col  justify-center max-[827px]:w-full" >
                    <div className="text-center">
                        <h1 className='text-black text-4xl font-serif pb-4'>News Website</h1>
                        <p className='text-black text-3xl font-serif pb-3'> Every news is in the Palm of your hand</p>
                        <p className=' text-lg text-gray-400 font-serif pb-3'>Login and Get Updated About all the news in the World</p>
                    </div>
                    <div className='w-full text-center'>
                        <Inputs handleChanges={HandleChanges} errors={errors.email} inputName ='email' inputType='email'/>
                        <Inputs placeholderText='enter Password' inputType='password' handleChanges={HandleChanges} inputName='password'/>
                        <Buttons 
                         handlCLicks={handleClicks}
                        />
                        <h1 className='text-gray-600 text-xl font-serif font-bold text-center pb-2'>OR</h1>
                        <Buttons
                            buttonText='Continue with Google'
                            textColor='text-black'
                            ButtonBackground='bg-white'
                            hoverEffect='hover:bg-gray-200'
                           
                        />
                        <p className='text-lg font-serif'>you dont have an account what you wait for <span className='text-lg font-serif underline text-violet-950 cursor-pointer' onClick={() => Navigate('/Register')}>register</span></p>
                    </div>
                </div>
                <div className="rightContainer w-1/2 h-full flex flex-col justify-end z-0 py-7 px-5 max-[827px]:hidden">
                    <h1 className='z-30  font-serif font-extrabold text-white text-2xl pb-3'>Welcome back to a world of ideas, insights, and inspiration.
                        Fuel your curiosity and dive into the stories that matter</h1>
                    <p className='z-30  text-lg text-white font-sans underline'>Log in to explore, engage, and elevate your perspective.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
