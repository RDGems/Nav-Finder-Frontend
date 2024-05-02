import React from 'react'
import Navbar from '../components/Navbar'
import {
  IconBrandGoogle,
} from "@tabler/icons-react";
const Signup = () => {
 function handleSubmit() {}

  return (<div>
    <Navbar></Navbar>
    <div className="mx-auto flex flex-col w-[50%]   border-2 border-neutral-600  items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black ">
      <h2 className="font-bold text-xl text-neutral-200 ">
        Welcome to NavFinder
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2 ">
        Let's get started
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              First name
            </label>
            <input
              className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
                         focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
                         disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
              id="firstname"
              placeholder="FirstName"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Last name
            </label>
            <input
              className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
              id="lastname"
              placeholder="LastName"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email ID
            </label>
            <input
              className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
              id="emailid"
              placeholder="Email Id"
              type="email"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <input
              className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
              id="password"
              placeholder="*************"
              type="password"
            />
          </div>
        </div>

        <button
          className="  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
           to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium 
           shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
           dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

<div className="flex flex-col space-y-4">
  <button
    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
    type="submit"
  >
    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
      Login With Google
    </span>
    
  </button>
  </div>
      </form>
    </div>
    </div>
  );
}

export default Signup
