import React from 'react'
import Vehicle from "../../assests/images/VehiclePermit.png"


const VehiclePermit = () => {
  return (
    <div>
        <div className=" text-3xl text-white m-6 font-bold">
        NavFinder
      </div>
      <div className=" pl-[32%] mb-20   ">
        <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 gap-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            
            <div className=' text-white  text-xl font-semibold flex items-center justify-center '>
            Take a photo of your Vehicle Permit
            </div>
            <div className=' text-slate-100 text-2xs text- font-semibold flex items-center justify-center'>
            If the vehicle owner name on the vehicle documents is different from mine, then I hereby confirm that I have the vehicle owner's consent to drive this vehicle on the Uber Platform. This declaration can be treated as a No-Objection Certificate and releases Uber from any legal obligations and consequences</div>
            <div className=' flex items-center justify-center'>
                <img src={Vehicle} alt="license" className='  ' />
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

export default VehiclePermit