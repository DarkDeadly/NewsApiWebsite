import React from 'react'

const Inputs = ({errors ,inputName = 'username' ,handleChanges ,inputType = 'email',paddingInputs = "w-[80%]" , placeholderText = 'enter Email' ,mr = 'mr-0'}) => {
  return (
    <div>
      <input 
      type={inputType} 
      placeholder={placeholderText}
      className= {`border-gray-600 border ${paddingInputs} py-2 rounded-lg mb-2 focus:border-black text-md pl-2 ${mr}`}
      onChange={handleChanges}
      name={inputName}
      />
      {errors && <p className='text-lg font-medium text-red-500 mb-2 text-start pl-16' >{errors}</p>}
    </div>
  )
}

export default Inputs
