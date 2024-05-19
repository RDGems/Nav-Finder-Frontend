import React from 'react'
import Aadhar from "../../assests/images/aadhaa_card.png"

const AadharCard = () => {
  return (
    <div>
        <div className=" text-3xl text-white m-6 font-bold">
        NavFinder
      </div>
      <div className=" pl-[32%] mb-20   ">
        <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 gap-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            
            <div className=' text-white  text-xl font-semibold flex items-center justify-center '>
            Let's find your Aadhaar card
            </div>
            <div className=' text-slate-100 text-2xs text- font-semibold flex items-center justify-center'>
            Enter your Aadhaar and we'll get your information from UIDAI. By sharing your Aadhar details, you hereby confirm that you have shared such details voluntarily.
            </div>
            <div className=' flex items-center justify-center'>
                <img src={Aadhar} alt="license" className='  ' />
            </div>
            <div className='flex flex-col text-white text-xl'>
                <p className='text-white font-semibold text-xl mb-3'>Aadhar number</p>
                
                <input type="text" placeholder="Enter your Aadhar number" className="bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 " />
            </div>
            <div className='gap-2 flex flex-col justify-center items-center '>
                <p className='text-white font-semibold text-xl mb-3'>upload document</p>
                  
                <input type="file" placeholder="Enter your licence number" className="p-2 text-white font-semibold   border-2 rounded-md w-[93px]  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50" />
            </div>
            <div className='gap-2 flex flex-col justify-center items-center '>
                <button className=' bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 text-white'>Submit</button>
                
            </div>
            
        </div>
      </div>     
    </div>
  )
}

export default AadharCard