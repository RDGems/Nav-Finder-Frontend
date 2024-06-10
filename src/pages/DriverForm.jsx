import { React, useState, useRef,useContext } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useApi from "../utils/services/ApiServices";
import AppContext from "../context/AppContext";
import toast from "react-hot-toast";

import {
  useJsApiLoader,
  
  Autocomplete,
  
} from "@react-google-maps/api";

const DriverForm = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC2GqpvPKsmomitPqiMK3XX9yA7hQynS_g",
    libraries: ["places"],
  });
  const { post } = useApi();
  let { accessToken } = useContext(AppContext);
  const [carType, setCarType] = useState();
  const [vehicleTypeClassName, setVehicleTypeClassName] = useState("");
  const carTypeOnChange = (event) => {
    event.preventDefault();
    setCarType({
      [event.target.name]: event.target.value,
    });
  };
  const preferLocation = useRef();

  const preferredLocationHandler = async(event) => {
    event.preventDefault();
    const url = "driver/preferedLocation";
    try {
      const response = await post(url,{
        preferredPlace:preferLocation.current.value,
        location:[ 40.7128,
          -74.006]
      },{
            
        Authorization: `Bearer ${accessToken}`,
    
    });
    // console.log(response)
    localStorage.setItem('driverToken', response.data);
      if(response.success === true) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const vehicleTypeHandler = async (event) => {
    event.preventDefault();
    const url = "driver/driverVehicleType";
   
    try {
      const response = await post(url, {
        vehicleType:carType.vehicleType,
      },{
        'access-medium': `Bearer ${localStorage.getItem('driverToken')}`, 
        Authorization: `Bearer ${accessToken}`
    
    });
    setVehicleTypeClassName("hidden");
      
    } catch (error) {}
  };

  return (
    <div>
      {isLoaded && (
        <div>
          <div className=" text-3xl text-white m-6 font-bold">NavFinder</div>
          <div className=" pl-[32%] mb-20   ">
            <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className=" flex flex-col gap-4">
                <div className=" text-4xl text-white font-bold mx-auto ">
                  Welcome,{localStorage.getItem("currentUser")}
                </div>
                <div className=" text-white font-semibold px-4 mx-auto">
                  Here's what you need to do to set up your driver account.
                </div>
                <div
                  className={` mb-2 mt-6 flex flex-col gap-4 ${vehicleTypeClassName}`}
                >
                  <form
                    className=" p-2 text-white font-semibold   border-2 rounded-md w-auto  border-neutral-600 hover:border-2  "
                    onSubmit={preferredLocationHandler}
                  >
                    <label className="text-xl">Preferred Location:</label>
                    <Autocomplete>
                    <input
                     
                      className="text-xl ml-5 rounded text-black"
                      type="text"
                      placeholder="Location"
                      ref={preferLocation}
                    />
                    </Autocomplete>
                    <button
                      className="text-md ml-8 text-black rounded-2xl border-white bg-white p-2"
                      type="submit"
                    >
                      Ok
                    </button>
                  </form>
                  <form
                    className=" p-2 text-white font-semibold   border-2 rounded-md w-auto  border-neutral-600 hover:border-2  "
                    onSubmit={vehicleTypeHandler}
                  >
                    <label className="text-xl">Vehicle Type:</label>
                    <input
                      onChange={carTypeOnChange}
                      className="text-xl ml-5 rounded text-black"
                      type="text"
                      name="vehicleType"
                      id="vehicleType"
                      placeholder="Car"
                    />
                    <button
                      className="text-md ml-8 text-black rounded-2xl border-white bg-white p-2"
                      type="submit"
                    >
                      Ok
                    </button>
                  </form>
                </div>
                <div className=" mb-10 mt-4 flex flex-col gap-4 ">
                  <div className=" p-2 text-white font-semibold   border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 ">
                    <Link
                      to="/DriverLicense"
                      className="justify-between items-center flex"
                    >
                      Driver License
                      <FaGreaterThan />
                    </Link>
                  </div>
                  <div className="  items-center p-2 text-white font-semibold   border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 ">
                    <Link
                      to="/ProfilePhoto"
                      className="justify-between items-center flex"
                    >
                      Profile Photo
                      <FaGreaterThan />
                    </Link>
                  </div>
                  <div className="   items-center p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 ">
                    <Link
                      to="/AadharCard"
                      className="justify-between items-center flex"
                    >
                      Aadhar Card
                      <FaGreaterThan />
                    </Link>
                  </div>
                  <div className="  items-center p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 ">
                    <Link
                      to="/PanCard"
                      className="justify-between items-center flex"
                    >
                      Pan Card
                      <FaGreaterThan />
                    </Link>
                  </div>
                  {/* <div className="  items-center p-2 text-white font-semibold border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 ">
                    <Link
                      to="/VehicleInsurance"
                      className="justify-between items-center flex"
                    >
                      Vehicle Insurance
                      <FaGreaterThan />
                    </Link>
                  </div> */}
                  {/* <div className='  items-center p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 '>
                Registration Certificate
                <FaGreaterThan />
                </div> */}
                  {/* <div className="  items-center p-2 text-white font-semibold  border-2 rounded-md w-auto  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 ">
                    <Link
                      to="/VehiclePermit"
                      className="justify-between items-center flex"
                    >
                      Vehicle Permit
                      <FaGreaterThan />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverForm;
