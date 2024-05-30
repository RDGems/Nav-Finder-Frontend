import { React, useState } from "react";
import license from "../../assests/images/license.png"
import useApi from "../../utils/services/ApiServices";

const DriverLicense = () => {
  const { post } = useApi();

  // const handleSubmit = async(event) => {
  //   event.preventDefault();


  //     const url = "driver/document/drivingLicence";
  //   try {
  //   const response = await post(url, {},{
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization':`Bearer ${accessToken}`
  //   });
  //   console.log(response);
  //   navigate("-1");
  //   } catch (error) {
  //     console.log("Error on submitting driver License: -- "+error)
  //   }
    
  // };


  // const handleFileUpload = (event) => {
  //   event.preventDefault();
  //   const file = event.target.files[0];
  //   userFormData.file = file;
  // };


  return (
    <div>
        <div className=" text-3xl text-white m-6 font-bold">
        NavFinder
      </div>
      <div className=" pl-[32%] mb-20   ">
        <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 gap-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <div className=' text-white  text-xl font-semibold flex items-center justify-center '>
            Enter your licence number and date of birth
            </div>
            <div>
                <img src={license} alt="license" />
            </div>
            <div className=" flex flex-col text-white text-xl" >
                DOB
                <input type="date" placeholder="11/09/2002" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
            </div>
            <div className='flex flex-col text-white text-xl'>
                <p className='text-white font-semibold text-xl mb-3'>Licence number</p>
                {/* <input type="text" placeholder="Enter your date of birth" className=" bg-black border-2 border-neutral-600 rounded-md w-full p-4 h-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" /> */}
                <input type="text" placeholder="Enter your licence number" className="bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 " />
            </div>
            <div className='gap-2 flex flex-col justify-center items-center '>
                <p className='text-white font-semibold text-xl mb-3'>upload document</p>
                {/* <input type="text" placeholder="Enter your date of birth" className=" bg-black border-2 border-neutral-600 rounded-md w-full p-4 h-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" /> */}
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

export default DriverLicense