import { React, useState } from "react";
import Navbar from "../components/Navbar";
import useApi from '../utils/services/ApiServices'
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const navigate = useNavigate();
  const[formError,setFormError] = useState();
  const { post,error}=useApi();
  const [signupData,setSignupData] = useState({
    userName:"",
    email:"",
    password:""
  });

  const handleChange = (event)=>{
    event.preventDefault();
    setSignupData({
      ...signupData,[event.target.name]:event.target.value
    });
  }
  
 
  
  const handleSubmit=  async(event) => {
    event.preventDefault();
    setFormError(null)
    const url="/auth/signup";
    try{
      if(!signupData.userName || !signupData.email || !signupData.password){
        setFormError("Please fill the details")
      }
      
      const response = await post(url, signupData);  
      if(response)
        {if(response.success === true){
        navigate('/login');
      }
      else if(response.success === false){
        setFormError(response.data.message)
      }}
     if( !signupData.userName && !signupData.email && !signupData.password && error){
        
        setFormError("Please fill the details correctly..")
      }
      
    }catch(err){
      
      console.log(err);
    }
}




  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto flex flex-col w-[50%]   border-2 border-neutral-600  items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
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
                User Name
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
                         focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
                         disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="userName"
                name="userName"
                placeholder="User Name"
                value = {signupData.userName}
                onChange={handleChange}
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
                id="email"
                name='email'
                value = {signupData.email}
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
                value = {signupData.password}
                onChange={handleChange}
                placeholder="*************"
                type="password"
              />
            </div>
          </div>
          <span className="text-neutral-300 text-sm max-w-sm mt-2 " >
            {formError}
          </span>

          <button
            className="  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900
           to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium 
           shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
           dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            
          >Sign Up &rarr;</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
