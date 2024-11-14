import React from 'react'

const Buttons = ({handlCLicks,buttonText = 'Sign In' , buttonWidth = "w-[80%]" , ButtonBackground = "bg-black", textColor = 'text-white' , hoverEffect = "hover:bg-slate-900"}) => {
  return (
    <div>
      <button 
      className={`py-3 ${buttonWidth}  ${ButtonBackground} rounded-xl ${hoverEffect} mb-2 ${textColor} `}
      onClick={handlCLicks}
      >   
    {buttonText}</button>
    </div>
  )
}

export default Buttons
