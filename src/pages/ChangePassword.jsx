import { React, useState } from "react";
import Navbar from "../components/Navbar";
import useApi from '../utils/services/ApiServices'
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {

  const navigate = useNavigate();

  const { post}=useApi();
  const [changePasswordData,setChangePasswordData] = useState({
    oldPassword:"",
   password:"",
    
  });

  const handleChange = (event)=>{
    event.preventDefault();
    setChangePasswordData({
      ...changePasswordData,[event.target.name]:event.target.value
    });
  }
  
 
  
  const handleSubmit=  async(event) => {
    const url="auth/changePassword";
    event.preventDefault();
    
    try {
      const response = await post(url,{
        "oldPassword": changePasswordData.oldPassword,
        "password": changePasswordData.password
      }); 
      
  
      if(response.success === true){
            navigate('/login')
        if(response.success === false){
          console.log("Error in Changing Password")
        }
        
      }
      else{
    //   console.log(response);
      }
    } catch (error) {
      console.log("Error in Changing Password: -"+error)
    }
}




  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto flex flex-col w-[50%]   border-2 border-neutral-600  items-center justify-between mt-[4%] max-w-md   rounded-none md:rounded-2xl p-4 md:p-8  bg-black ">
        <h2 className="font-bold text-xl text-neutral-200 ">
          Change Password
        </h2>
        
        <form className="my-8" onSubmit={handleSubmit}>
          

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Old Password
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="oldPassword"
                name='oldPassword'
                value = {changePasswordData.oldPassword}
                onChange={handleChange}
                placeholder="*************"
                type="password"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="text-sm text-left font-medium text-white  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                New Password
              </label>
              <input
                className="flex h-10 w-full border-none bg-zinc-800 text-white  shadow-input rounded-md px-3 py-2 text-sm  placeholder:text-neutral-400  
              focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 
              disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
                id="newPassword"
                name='newPassword'
                value = {changePasswordData.newPassword}
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
            
          >Change Password &rarr;</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
