import React from "react";
import Navbar from "../components/Navbar";
import image from "../assests/images/profile.png";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" flex  h-screen w-[100%] ">
        <div className="flex flex-col bg-white w-[80vw] h-auto mx-auto rounded-3xl mt-5 mb-5">
          <div className="flex flex-row ">
            <div className="  mt-5 ml-10 text-center  w-[150px] h-[130px] bg-black rounded-3xl ">
              <img
                className=" rounded-full w-[140px] h-[125px] m-auto"
                src={image}
                alt="Profile"
              />
              <div>
                <p className="font-bold text-black m-auto mt-5 text-2xl">
                  Abhay Garg
                </p>
              </div>
            </div>
            <div className="flex flex-row ml-28 mt-16 bg-black h-[50px] w-[350px] text-white text-xl rounded-lg">
              <p className="font-bold text-white m-auto">User Name :</p>
              <p className="gap-5 m-auto "> AbhayGARG445</p>
            </div>
            <div className="flex flex-row ml-28 mt-16 bg-black h-[50px] w-[350px] text-white text-xl rounded-lg">
              <p className="font-bold text-white m-auto">Email :</p>
              <p className="gap-5 m-auto "> abhay@gmail.com</p>
            </div>
          </div>

          <div className=" flex flex-row ">
            <div className="mt-48 ml-10  w-60 flex flex-col">
              <div className="bg-black text-white h-8 w-[10vw]  mx-auto mb-5 rounded-lg hover:bg-gray-800 ">
                <Link className="m-auto">
                  <button className="mx-3 mt-1"> Change Password</button>
                </Link>
              </div>
              <div className="bg-black text-white h-8 w-[10vw]  mx-auto mb-5 rounded-lg hover:bg-gray-800 ">
                <Link className="m-auto">
                  <button className="mx-3 mt-1"> Update Profile</button>
                </Link>
              </div>
              <div className= " text-black  w-[10vw]     mx-auto mb-5 rounded-lg">
                <p className="text-2xl" font-bold>Wanna Join Us?</p>
                <div className="bg-black text-white h-8 w-[10vw] mt-5  mx-auto mb-5 rounded-lg hover:bg-gray-800 ">
                <Link className="m-auto">
                  <button className="mx-3 mt-1"> Rent Your Vehicle</button>
                </Link>
              </div>
              <div className="bg-black text-white h-8 w-[10vw]  mx-auto mb-5 rounded-lg hover:bg-gray-800 ">
                <Link className="m-auto">
                  <button className="mx-3 mt-1"> As a Driver</button>
                </Link>
              </div>
              </div>
            </div>
            
            <div className="ml-[20px]">
              <div className="flex flex-row ">
                <div className="flex flex-row  mt-10 bg-black h-[50px] w-[350px] text-white text-xl rounded-lg">
                  <p className="font-bold text-white m-auto">Mobile No. :</p>
                  <p className="gap-5 m-auto "> +91 8657464565</p>
                </div>
                <div className="flex flex-row ml-28 mt-10 bg-black h-[50px] w-[350px] text-white text-xl rounded-lg">
                  <p className="font-bold text-blue-950 m-auto">
                    Date of Birth :
                  </p>
                  <p className="gap-5 m-auto "> +91 8657464565</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col  mt-10 bg-black h-[270px] w-[813px] text-white text-xl rounded-lg">
                <div className="font-bold  h-[20px] text-white ml-6 mt-3 text-2xl">
                  <p>Address :</p>
                </div>
                <div className="flex flex-row mt-8 m-auto gap-5 ">
                  <div className="m-auto">
                    <div className="flex flex-row m-auto  h-auto w-auto text-white  rounded-lg">
                      <p className="font-bold text-white m-auto">Street:</p>
                      <p className="gap-5 m-auto ">
                        {" "}
                        Mohalla Mahajanan, Chungi No. 3,{" "}
                      </p>
                    </div>
                    <div className="flex flex-row  mt-8 h-auto w-auto text-white  rounded-lg">
                      <p className="font-bold text-white m-auto">Landmark:</p>
                      <p className="gap-5 m-auto ">RAwli Road </p>
                    </div>
                    <div className="flex flex-row  mt-8 h-auto w-auto text-white  rounded-lg">
                      <p className="font-bold text-white m-auto">City:</p>
                      <p className="gap-5 m-auto ">Ghaziabad</p>
                    </div>
                  </div>
                  <div className="ml-10">
                    <div className="flex flex-row  m-auto  h-auto w-auto  text-white  rounded-lg">
                      <p className="font-bold text-white m-auto">
                        Postal Code:
                      </p>
                      <p className="gap-5 m-auto "> Muradnagar</p>
                    </div>
                    <div className="flex flex-row   mt-8 h-auto w-auto text-white  rounded-lg">
                      <p className="font-bold text-white m-auto">State:</p>
                      <p className="gap-5 m-auto ">Chungi No. 3 </p>
                    </div>
                    <div className="flex flex-row   mt-8 h-auto w-auto text-white  rounded-lg">
                      <p className="font-bold text-white m-auto">Country:</p>
                      <p className="gap-5 m-auto ">Ghaziabad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-row  px-10 mt-10 bg-black h-[50px] w-[250px] text-white text-xl rounded-lg">
                  <p className="font-bold text-white m-auto">Gender :</p>
                  <p className="gap-5 m-auto "> Male</p>
                </div>
                <div className="flex flex-row  ml-[210px] px-10 mt-10 bg-black h-[50px] w-[250px] text-white text-xl rounded-lg">
                  <p className="font-bold text-white m-auto">Status :</p>
                  <p className="gap-5 m-auto "> Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
