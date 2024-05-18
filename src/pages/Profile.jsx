import React from "react";
import Navbar from "../components/Navbar";
import image from "../assests/images/profile.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaGreaterThan } from "react-icons/fa";
const Profile = () => {
  return (
    <div>
      <div className=" text-3xl text-white m-6 font-bold">
        NavFinder Account
      </div>
      <div className=" pl-[32%] mb-20  ">
      <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <h1 className=" text-2xl text-white font-semibold m-5">Account Info</h1>
        <div className=" flex flex-col m-6 mt-0 text-white ">
        <CgProfile  className=" h-20 w-20 items-center"/>
        <div className=" flex flex-col text-white text-xl my-5">
          User Name
          {/* <Link to="/editprofile" className=" rounded-md w-full my-2 border-2  border-neutral-600 hover:border-0 translate-x-all duration-50 ">
          <butoon className='m-1 text-[15px] text-gray-400 flex justify-between items-center  '>
            Abhinandan
            <FaGreaterThan />
          </butoon></Link> */}
          <input type="text" placeholder="Abhinandan" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>

        </div>
        <div className=" flex flex-col text-white text-xl" >
          Email
          <input type="text" placeholder="Abhinandan@gmail.com" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
        </div>
        <div className="flex justify-between mt-5">
        <div className=" flex flex-col text-white text-xl" >
          Mobile Number
          <input type="text" placeholder="7060504030" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
        </div>
        <div className=" flex flex-col text-white text-xl" >
          DOB
          <input type="date" placeholder="11/09/2002" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
        </div>
        </div>
        <h1 className="text-xl mt-5">Address</h1>
        <div className="flex flex-col justify-between mt-2 border-2 p-2 gap-2 rounded-md border-neutral-600 ">
          <div className=" flex justify-between">
            <div className=" flex flex-col text-white text-xl" >
              Street
            <input type="text" placeholder="7060504030" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
          </div>
          <div className=" flex flex-col text-white text-xl" >
            Landmark
            <input type="text" placeholder="7060504030" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
          </div>
          </div>
          <div className=" flex justify-between gap-2">
            <div className=" flex flex-col text-white text-xl" >
              City
              <input type="text" placeholder="Modinagar" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
            </div>
            <div className=" flex flex-col text-white text-xl" >
              Postal Code
              <input type="text" max={6} placeholder="201204" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
            </div>
            <div className=" flex flex-col text-white text-xl" >
              Country
              <input type="text" max={6} placeholder="India" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
            </div>

          </div>
          
        
        
        </div>
        <div className="my-5 flex justify-between">
            <div className=" flex flex-col text-white text-xl" >
              Status
              <input type="text" placeholder="Active" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "></input>
            </div>
            <div className=" flex flex-col text-white text-xl" >
              Gender
              <input type="text" placeholder="male" className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black "></input>
            </div>
          </div>
        <div className="my-5 flex justify-between">
            <div className=" flex flex-col text-white text-xl" >
              <button className=" border-2 rounded-md p-2  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "><Link to='/change-Password'>Change Password</Link></button>
            </div>
            <div className=" flex flex-col text-white text-xl" >
              <button className=" border-2 rounded-md p-2  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "><Link to='/update -Password'>Update Password</Link></button>
            </div>
            
          </div>
        
        </div>
        
      </div>
      </div>
     
    </div>
  );
};

export default Profile;
