import { React, useState } from "react";
import Pan from "../../assests/images/pan_card.png";
import useApi from "../../utils/services/ApiServices";
import { useNavigate } from "react-router-dom";

const PanCard = () => {
  const { post } = useApi();
  const navigate = useNavigate();

  const [panCard, setPanCard] = useState({
    documentType: "pancard",
    documentNumber: "",
    file: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "driver/document/pancard";
    try {
      const response = await post(url, panCard, {
        "Content-Type": "multipart/form-data",
        "access-medium": `Bearer ${localStorage.getItem("driverToken")}`,
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      });
      // console.log(response);
      navigate("/VehiclePermit");
    } catch (error) {
      console.log("Error on submitting driver License: -- " + error);
    }
    // console.log(driverLicense)
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    panCard.file = file;
  };

  const handleChange = (event) => {
    event.preventDefault();
    setPanCard({
      ...panCard,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div className=" text-3xl text-white m-6 font-bold">NavFinder</div>
      <div className=" pl-[32%] mb-20   ">
        <div className="flex flex-col  border-0 border-neutral-600 rounded-md w-[50%] p-4 gap-4 h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className=" text-white  text-xl font-semibold flex items-center justify-center ">
            Let’s find your PAN card
          </div>
          <div className=" text-slate-100 text-2xs text- font-semibold flex items-center justify-center">
            Enter your PAN card number and we'll get the required information
            from the NSDL, or you can upload your PAN card instead
          </div>
          <div className=" flex items-center justify-center">
            <img src={Pan} alt="license" className="  " />
          </div>
          <div className="flex flex-col text-white text-xl">
            <p className="text-white font-semibold text-xl mb-3">
              PanCard number
            </p>

            <input
              type="text"
              onChange={handleChange}
              id="documentNumber"
              name="documentNumber"
              placeholder="Enter your PanCard number"
              className="bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 "
            />
          </div>
          <div className="gap-2 flex flex-col justify-center items-center ">
            <p className="text-white font-semibold text-xl mb-3">
              upload document
            </p>

            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileUpload}
              placeholder="Enter your licence number"
              className="p-2 text-white font-semibold   border-2 rounded-md w-[93px]  border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50"
            />
          </div>
          <div className="gap-2 flex flex-col justify-center items-center ">
            <button
              onClick={handleSubmit}
              className=" bg-black rounded-md w-full my-2 border-2 text-[15px] p-1 flex justify-center items-center border-neutral-600 hover:border-2 hover:border-black translate-x-all duration-50 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanCard;
