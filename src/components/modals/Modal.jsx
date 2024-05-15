import React from 'react'
import { Link } from 'react-router-dom'

export const Modal = ({open,setOpen,children}) => {
  return (
    <div
    className={`fixed inset-0 mx-auto flex justify-center items-center transition-colors 
    ${open? "visible bg-black opacity-100 ": "invisible"}`}
    >
       
       <div
        className={` bg-white rounded-xl shadow p-6 transition-all
       ${open?'scale-100 opacity-100 ':'scale-125 opacity-0'}`}>
         <Link to='/'>
        <button onClick={()=>{setOpen(false)}}
         className='absolute top-2 right-2 p-1  rounded-lg text-gray-500 bg-white hover:bg-gray-950 hover:text-gray-600'>
           X
        </button>
        </Link>
       {children}
       </div>
    </div>
  )
}
