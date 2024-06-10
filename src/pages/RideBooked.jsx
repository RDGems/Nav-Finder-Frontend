import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import useApi from "../utils/services/ApiServices";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const{post} = useApi();
  useEffect(() => {
    const bookRide = {
      pickupLocation: localStorage.getItem('pickupLocation'),
      dropoffLocation: localStorage.getItem('dropoffLocation'),
      estimatedFare: localStorage.getItem('estimatedFare'),
      vehicleType: localStorage.getItem('vehicleType'),
      paymentMethod: "Online Payment",
      distance: localStorage.getItem('distance'),
      duration: localStorage.getItem('duration'),
      paymentStatus: true,
    };

    // if(bookRide) {
     
    //  getRideDetails(bookRide);
     
    // }

  }, []);

  // const getRideDetails = async (bookRide) => {
  //   const url = '/finder/bookRide'
  //   try {
      
  //   const result = await post(url,bookRide,{
            
  //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  
  // });
  // console.log(result)
  //   } catch (error) {
  //     console.log(error)
  //   }
  
  // }

  const handleSubmit = async (event) => {
    navigate("/");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="  mx-auto flex flex-col w-[50%] border-2 border-neutral-600 items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <h2 className="font-bold text-xl text-neutral-200 ">
          Your Ride is Booked
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2 ">
          Please contact your Driver
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Pickup Location
              </label>

              <input
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                value={localStorage.getItem('pickupLocation')}
                // onChange={handleChange}
                // placeholder="Driver Name"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Drop off Location
              </label>

              <input
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                value={localStorage.getItem('dropoffLocation')}
                // onChange={handleChange}
                // placeholder="Driver Name"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                OTP 
              </label>
              <input
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="password"
                name="password"
                value="659874"
                // onChange={handleChange}
                // placeholder="7060280050"
                type="text"
                maxLength={10}
              />
              {/* <span onClick={forgotPasswordHandler}className=' text-sm ml-16 text-blue-500'>Forgot password?</span> */}
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Total Fare
              </label>
              <input
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="password"
                name="password"
                // onChange={handleChange}
                // placeholder="123456"
                value={Math.round(localStorage.getItem('estimatedFare'))}
                type="text"
                maxLength={6}
              />
              <p className="text-neutral-300 text-sm max-w-sm mt-2 ">
                Please share otp with the driver.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {/* <button
        className="  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
         to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium 
         shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
         dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Cancel Ride &rarr;
      </button> */}
            <button
              className="  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
         to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium 
         shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
         dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Go to Home &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
