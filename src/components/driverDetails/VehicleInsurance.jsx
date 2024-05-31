import {React,useState} from 'react'
import Vehicle from "../../assests/images/VehicleInsurance.jpg"
import useApi from "../../utils/services/ApiServices";
import { useNavigate } from "react-router-dom";

const VehicleInsurance = () => {
  const { post } = useApi();
  const navigate = useNavigate();

  const [vehicleInsurance, setVehicleInsurance] = useState({
    documentType: "driverPhoto",
    file: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "driver/document/driverPhoto";
    try {
      const response = await post(url, vehicleInsurance, {
        "Content-Type": "multipart/form-data",
        "access-medium": `Bearer ${localStorage.getItem("driverToken")}`,
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      });
      // console.log(response);
      navigate("/AadharCard");
    } catch (error) {
      console.log("Error on submitting driver License: -- " + error);
    }
    // console.log(driverLicense)
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    vehicleInsurance.file = file;
  };
  return (
    <div>
        <div className=" text-3xl text-white m-6 font-bold">
        NavFinder
      </div>
      <div className=" pl-[32%] mb-20   ">
        <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 gap-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            
            <div className=' text-white  text-xl font-semibold flex items-center justify-center '>
            Take a photo of your Vehicle Insurance
            </div>
            <div className=' text-slate-100 text-2xs text- font-semibold flex items-center justify-center'>
            Make sure photo is not blurred and these details are clearly visible - Model, Vehicle number, Chasis number, Registration Name, Start Date, Expiry Date, Financier name or Company name. You may need to submit additional photos if your document has multiple pages or sides or if first image was not clear.            </div>
            <div className=' flex items-center justify-center'>
                <img src={Vehicle} alt="license" className='  ' />
            </div>
            
            <div className='gap-2 flex flex-col justify-center items-center '>
                <p className='text-white font-semibold text-xl mb-3'>upload document</p>
                  
                <input type="file" placeholder="Enter your licence number" className="p-2 text-white font-semibold   border-2 rounded-md w-[93px]  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50" />
            </div>
            <div className='gap-2 flex flex-col justify-center items-center '>
                <button className=' bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 text-white'>Submit</button>
                
            </div>
            
        </div>
      </div>     
    </div>
  )
}

export default VehicleInsurance