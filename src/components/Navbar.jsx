import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/images/Black and Cyan Blue Simple Game Animated Logo(1).jpg";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import useApi from '../utils/services/ApiServices'


const Navbar = () => {

  const {post} = useApi();
  const { isLogin,setIsLogin,setAccessToken,accessToken } = useContext(AppContext);



  const logoutHandler = async(event)=>{
    const url="/auth/logout";
    event.preventDefault();
    
    try {
      const response = await post(url,{},{
        'Authorization':`Bearer ${accessToken}`
      }); 
      
  
      if(response.success === true){
        setAccessToken('');
        setIsLogin(false);
        if(response.success === false){
          console.log("Error in logout")
        }
        
      }
      else{
      console.log(response);
      }
    } catch (error) {
      console.log("Error in logout: -"+error)
    }
    
  }

  return (
    <div className=" w-screen  px-[10%] flex font-semibold ">
      {/* <div className='flex flex-row bg-slate-50 justify-evenly'> */}
      <div className="flex w-11/12 max-w-maxContent items-center justify-between mx-auto lg:flex-row flex-row">
        <Link to="/">
          <img src={Logo} alt="" className="w-[100px] h-[10a0px]" />
        </Link>

        {isLogin ? (
          <div className="lg:flex gap-4 items-center  text-white">
            <button  onClick={logoutHandler} className=" bg-slate-800 p-2 rounded-md hover:bg-black">
             Logout
            </button>
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/profile">Profile</Link>
            </button>
          </div>
        ) : (
          <div className="lg:flex gap-4 items-center  text-white">
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/Login">Login</Link>
            </button>
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/Signup">Signup</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
