import React from 'react'

const DriverForm = () => {
  return (
    <div>
        <div className=" text-3xl text-white m-6 font-bold">
        NavFinder
      </div>
      <div className=" pl-[32%] mb-20   ">
        <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
           <div className=' flex flex-col gap-4'>
            <div className=' text-4xl text-white font-bold '>
                Welcome,Abhinandan
            </div>
            <div className=' text-white font-semibold px-4'>
                Here's what you need to do to set up your account.
            </div >

            <div className=' my-10 flex flex-col gap-4 '>
                <div className=' flex p-2 text-white font-semibold   border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                    Driver License
                </div>
                <div className=' flex p-2 text-white font-semibold   border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                    Profile Photo
                </div>
                <div className=' flex p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                    Aadhar Card
                </div>
                <div className=' flex p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                    Pan Card
                </div>
                <div className=' flex p-2 text-white font-semibold border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                Vehicle Insurance
                </div>
                <div className=' flex p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                Registration Certificate
                </div>
                <div className=' flex p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                    vehicle permit
                </div>
            </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default DriverForm