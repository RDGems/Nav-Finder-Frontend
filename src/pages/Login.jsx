import React, { useState,useContext } from 'react'
import Navbar from '../components/Navbar'
import useApi from '../utils/services/ApiServices'
import AppContext from '../context/AppContext'
import ModalContext from '../context/ModalContext'
import { Modal } from "../components/modals/Modal";
import { OnBoardingModal } from "../components/modals/OnBoardingModal";


const Login = () => {
  let{setIsLogin,setAccessToken} = useContext(AppContext);
  let{openOnBoardingModal,setOpenOnBoardingModal} = useContext(ModalContext);

  const { post}=useApi();
  const[loginData,setLoginData] = useState({
    email:"",
    password:""
  })

  const handleChange = (event)=>{
    event.preventDefault();
    setLoginData({
      ...loginData,[event.target.name]:event.target.value
    });
  }

 const handleSubmit=  async(event) => {
    const url="/auth/login";
    event.preventDefault();
    const response = await post(url, loginData);  
    if(response.success === true){
      setAccessToken(response.data.accessToken);
      console.log(response.data.isOnboarded)
      if(response.data.isOnboarded === false){
        setOpenOnBoardingModal(true);
      }
      setIsLogin(true);
    }
    else{
    console.log(response);
    }
    
}

return (
<div>
  <Navbar></Navbar>
  <div className="  mx-auto flex flex-col w-[50%] border-2 border-neutral-600 items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
    <h2 className="font-bold text-xl text-neutral-200 ">
      Login
    </h2>
    <p className="text-neutral-300 text-sm max-w-sm mt-2 ">
     Let's Unlock your ride
    </p>
    <form className="my-8" onSubmit={handleSubmit}>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <div className="flex flex-col space-y-2 w-full">
          <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email ID
          </label>
          <input
            className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
            id="email"
            name = 'email'
            onChange={handleChange}
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
            name='password'
            onChange={handleChange}
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
        Login &rarr;
      </button>
      
    </form>
  </div>
  <Modal open={openOnBoardingModal} setOpen={setOpenOnBoardingModal}  >
      <OnBoardingModal setOpen={setOpenOnBoardingModal}></OnBoardingModal>
      </Modal>
  </div>
);
}

export default Login
