import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/images/Logo.jpg";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import useApi from '../utils/services/ApiServices'
import toast from "react-hot-toast";



const Navbar = () => {

  const {post} = useApi();
  const { isLogin,setIsLogin,setAccessToken,accessToken,setCurrentUser } = useContext(AppContext);



  const logoutHandler = async(event)=>{
    const url="/auth/logout";
    event.preventDefault();
    
    try {
      const response = await post(url,{},{
        'Authorization':`Bearer ${accessToken}`
      }); 
      
      if(response.success === true){
        setAccessToken('');
        setCurrentUser({});
        setIsLogin(false);
        localStorage.setItem('accessToken', null);
        localStorage.setItem('isLogin', false);
        toast.success(response.message);

      }
      
    } catch (error) {
      toast.error(error.response.data.message);

    }
    
  }

  return (
    <div className=" w-screen  px-[10%] flex font-semibold ">
      {/* <div className='flex flex-row bg-slate-50 justify-evenly'> */}
      <div className="flex w-11/12 max-w-maxContent items-center justify-between mx-auto lg:flex-row flex-row">
        <Link to="/">
          <img src={Logo} alt="" className=" h-[80px]" />
        </Link>

        {isLogin ? (
          <div className="lg:flex gap-4 items-center  text-white">
            <button  onClick={logoutHandler} className=" bg-slate-800 p-2 rounded-md hover:bg-black">
             <Link to="/history">History</Link>
            </button>
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
