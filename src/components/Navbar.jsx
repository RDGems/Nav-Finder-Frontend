import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/images/Black and Cyan Blue Simple Game Animated Logo(1).jpg";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const { isLogin } = useContext(AppContext);
  // console.log(isLogin);
  return (
    <div className=" w-screen  px-[10%] flex font-semibold ">
      {/* <div className='flex flex-row bg-slate-50 justify-evenly'> */}
      <div className="flex w-11/12 max-w-maxContent items-center justify-between mx-auto lg:flex-row flex-row">
        <Link to="/">
          <img src={Logo} alt="" className="w-[100px] h-[10a0px]" />
        </Link>

        {isLogin ? (
          <div className="lg:flex gap-4 items-center  text-white">
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/logout">Logout</Link>
            </button>
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/profile">Profile</Link>
            </button>
          </div>
        ) : (
          <div className="lg:flex gap-4 items-center  text-white">
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/Signup">Signup</Link>
            </button>
            <button className=" bg-slate-800 p-2 rounded-md hover:bg-black">
              <Link to="/Login">Login</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
