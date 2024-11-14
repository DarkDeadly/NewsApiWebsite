import React from 'react'
import linksWeb from '../utils/linksWeb'
import { Link } from 'react-router-dom'
import Inputs from './Inputs'
import Buttons from './Buttons'

const Headers = () => {
  return (
    <div className='flex justify-between items-center py-5 '>
      <h1 className='text-2xl font-bold pl-5'><Link to='/home'>News Website</Link></h1>
      <div className="flex gap-16 text-xl font-sans max-lg:hidden">
       {linksWeb.map((linkel) =>(
        <Link to={linkel.destination} key={linkel.id} className='hover:underline '>{linkel.name}</Link>
       ))}
      </div>
      <div className="flex py-5 ">
        <Inputs inputName='search' placeholderText='what you want to search for ?' paddingInputs='w-[220px]' mr='mr-2'  />
        <Buttons buttonText='Search' ButtonBackground='bg-red-500' buttonWidth='w-[120px]' />
      </div>
    </div>
  )
}

export default Headers
