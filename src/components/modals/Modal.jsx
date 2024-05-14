import React from 'react'

export const Modal = ({open,setOpen,children}) => {
  return (
    <div
    className={`fixed inset-0 mx-auto flex justify-center items-center transition-colors 
    ${open? "visible bg-black opacity-90 ": "invisible"}`}
    >
       
       <div
        className={` bg-white rounded-xl shadow p-6 transition-all
       ${open?'scale-100 opacity-100 ':'scale-125 opacity-0'}`}>
        <button onClick={()=>{setOpen(false)}}
         className='absolute top-2 right-2 p-1  rounded-lg text-gray-500 bg-white hover:bg-gray-950 hover:text-gray-600'>
            X
        </button>
       {children}
       </div>
    </div>
  )
}
