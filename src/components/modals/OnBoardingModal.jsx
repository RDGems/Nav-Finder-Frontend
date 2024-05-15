import React from "react";
import { useNavigate } from "react-router-dom";


export const OnBoardingModal = ({ setOpen }) => {
    const navigate = useNavigate();

  const onBoardingHandler = async (event) => {
    event.preventDefault();
    navigate("/onBoarding");
    setOpen(false);
    
    
  };
  return (
    <div className="flex flex-col w-[30vw] mx-auto justify-center items-center  ">
      <h1 className="text-black mt-8 mb-8  font-bold text-3xl">
       Please Complete Your OnBoarding First..
      </h1>
      <div>
        <button
          onClick={onBoardingHandler}
          className="btn text-white text-bold text-center bg-black rounded-lg  py-2   text-xl w-20 hover:bg-gray-600 hover:text-black  "
        >
          Go &rarr;
        </button>
      </div>
    </div>
  );
};
